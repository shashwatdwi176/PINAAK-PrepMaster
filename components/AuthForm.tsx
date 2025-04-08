"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import FormField from "./FormField";



const authFormSchema =  (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
}

const AuthForm = ({type}: {type: FormType}) => {

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-in") {
        console.log("Sign in", values);
        toast.success("Sign in successful");
      } else {
        console.log("Sign up", values);
        toast.success("Sign up successful");
      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`);
    }
  }

  const isSignIn = type === "sign-in";
  const isSignUp = type === "sign-up";
  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">PINAAK PrepMaster</h2>
        </div>
        <h3>Practice job interview with AI</h3>
      
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
          { !isSignIn &&
          <FormField control={form.control} name= "name" label="Name" placeholder="Your Name"/>}
           <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Your email address"
              type="email"
            />

            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

          <Button className="btn" type="submit">
            {isSignIn ? "Sign in" : "Create an Account"}
          </Button>
        </form>
      </Form>

      <p className="text-center">
        {isSignIn ? 'No account yet?' : 'Already have an account?'}
        <Link href= {!isSignIn ? '/sign-in' : '/sign-up'} className="font-bold text-user-primary ml-1">
          {!isSignIn ? 'Sign in' : 'Sign up'}        
        </Link>
      </p>
      </div>
    </div>
  );
};

export default AuthForm;
