 

export interface InitRequest {
    
}

export interface InitResult {
 
    someIntVal: number;
 
    someBigIntVal: number;
 
    someBitVal: boolean;
 
    isEditAllowed: boolean;
 
    isDeleteAllowed: boolean;
 
    someFloatVal: number;
 
    someDecimalVal: number;
 
    someMinUTCDateTimeVal: string;
 
    someMinDateVal: string;
 
    someMoneyVal: number;
 
    someNVarCharVal: string;
 
    someVarCharVal: string;
 
    someTextVal: string;
 
    somePhoneNumber: string;
 
    someEmailAddress: string;
 
    flavorCode: string;
 
    landCode: string;
 
    tacCode: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];
}

export interface InitValidationError {
    property: string;
    message: string;

}

export class InitRequestInstance implements InitRequest {
    

    constructor() {
        
    }
}


export class InitResultInstance implements InitResult {
 
    someIntVal: number;
 
    someBigIntVal: number;
 
    someBitVal: boolean;
 
    isEditAllowed: boolean;
 
    isDeleteAllowed: boolean;
 
    someFloatVal: number;
 
    someDecimalVal: number;
 
    someMinUTCDateTimeVal: string;
 
    someMinDateVal: string;
 
    someMoneyVal: number;
 
    someNVarCharVal: string;
 
    someVarCharVal: string;
 
    someTextVal: string;
 
    somePhoneNumber: string;
 
    someEmailAddress: string;
 
    flavorCode: string;
 
    landCode: string;
 
    tacCode: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {
 
        this.someIntVal = 0;
 
        this.someBigIntVal = 0;
 
        this.someBitVal = false;
 
        this.isEditAllowed = false;
 
        this.isDeleteAllowed = false;
 
        this.someFloatVal = 0;
 
        this.someDecimalVal = 0;
 
        this.someMinUTCDateTimeVal = '01-01-1753 00:00:00'
 
        this.someMinDateVal = '01-01-1753 00:00:00';
 
        this.someMoneyVal = 0.0;
 
        this.someNVarCharVal = '';
 
        this.someVarCharVal = '';
 
        this.someTextVal = '';
 
        this.somePhoneNumber = '';
 
        this.someEmailAddress = '';
 
        this.flavorCode = '00000000-0000-0000-0000-000000000000';
 
        this.landCode = '00000000-0000-0000-0000-000000000000';
 
        this.tacCode = '00000000-0000-0000-0000-000000000000';
        this.success = false;
        this.message = '';
        this.validationErrors =  [];
    }
}



export class InitValidationErrorInstance implements InitValidationError {
    property: string;
    message: string;

    constructor() { 
        this.property = '';
        this.message = ''; 
    }
}


 

  