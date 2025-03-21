export interface AuthUserSignIn {
	email: string;
	password: string;
}

export interface User {
	id: number;
	email: string;
	nombre: string;
	apellido: string;
}

export interface AuthResponse extends User {
	token: string;
}
