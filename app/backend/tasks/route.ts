import { NextResponse } from "next/server";
import dbConnect from "@/app/backend/dbConnect";
import {Todo} from "@/app/backend/model";

export async function GET(){
    await dbConnect();

    try{
        const todoTask = await Todo.find({});
        return NextResponse.json(todoTask);
    
    }catch(err:any){
        console.log(err);
        return NextResponse.json({message:"GET request failed"});
    }
}