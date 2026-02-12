export interface Event {
    _id: string;
    title: string;
    description: string;
    price: number;
}

export interface RegisterForm {
    fullName: string;
    email: string;
    phone: string;
    occupation: string;
    interestReason: string;
    password: string;
}

export interface RegisterResponse {
    token: string;
}

export interface JoinEventResponse {
    event: {
        title: string;
    };
    status: string;
}
