export enum ErrorTypes {
  CarNotFound = 'CarNotFound',
  InvalidMongoId = 'InvalidMongoId',
}

type ErrorsResponseObject = {
  message: string,
  httpStatus: number,
};

export type ErrorFormat = Record<ErrorTypes, ErrorsResponseObject>;

export const ErrorCatalogy: ErrorFormat = {
  CarNotFound: {
    message: 'Car not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    message: 'Invalid mongo id',
    httpStatus: 422,
  },
};