import { Request, Response } from 'express'

export abstract class BaseApiController<IResponse> {

    protected abstract executeImpl(req: Request): Promise<IResponse | void>;

    public async execute(req: Request, res: Response): Promise<void> {
        try {
            var result = await this.executeImpl(req);
            if (!!result) {
                res.type('application/json');
                res.status(200).json(result);
            } else {
                res.sendStatus(200);
            }
        } catch (err: any) {
            console.log(err);
            this.error(res, err)
        }
    }

    public error(res: Response, error: Error | string) {
        console.log(error);
        res.status(500).json({
            message: error.toString()
        })
    }
}
