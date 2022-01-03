export abstract class BaseGraphqlController<IRequest, IResponse> {
    protected abstract executeImpl(req: IRequest): Promise<IResponse>;
    public async execute(req: IRequest): Promise<IResponse> {
        return await this.executeImpl(req);
    }
}
