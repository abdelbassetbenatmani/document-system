"use server";
import {
  account,
} from "@/config/appwrite";
import { ILogin } from "@/types";

interface ILoginn {
  email: string;
  password: string;
}

export async function loginAccount({email, password}: ILoginn) {
  try {
    const session = await account.createEmailSession(email, password);
    return {
      status: 200,
      data: session,
    };
  } catch (error:any) {
    return {
      status: error.code,
      error: error.message,
    };
  }
}
