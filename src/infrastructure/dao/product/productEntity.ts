import * as Sequelize from 'sequelize';
import { ProductResponse } from '../../../core/domain/product/product';
import { sequelizeConn } from '../sequelize.config';

export class ProductEntity extends Sequelize.Model {
    id!: string;
    name!: string;
    description!: string;
    price!: number;
    quantity!: number;
    image!: string;

    toResponse(): ProductResponse {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            price: this.price,
            quantity: this.quantity,
            image: this.image
        };
    }
}

ProductEntity.init({
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    image: {
        type: Sequelize.BLOB,
        allowNull: true,
    },
}, {
    sequelize: sequelizeConn,
    tableName: 'products',
    timestamps: true,
    underscored: true
})