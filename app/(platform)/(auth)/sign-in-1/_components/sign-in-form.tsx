// "use client";
// import { SigninValidation } from "@/actions/Auth/Sign-in/shema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import React, { useState } from "react";
// import { useFormStatus } from "react-dom";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { loginAccount } from "@/actions/Auth/Sign-in";
// import { toast } from "sonner";
// import { redirect, useRouter } from "next/navigation";
// import { useUser } from "@/app/context/user";
// type Props = {};

// const SignInForm = (props: Props) => {
//   const router = useRouter();
//   const { pending } = useFormStatus();
//   const [loading, setLoading] = useState<boolean>(false);
//   const contextUser = useUser();
//   // 1. Define your form.
//   const form = useForm<z.infer<typeof SigninValidation>>({
//     resolver: zodResolver(SigninValidation),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   // 2. Define a submit handler.
//   const onSubmit = async (values: z.infer<typeof SigninValidation>) => {
//     if (!contextUser) return;

//     if(contextUser.loginError){
//       toast.error(contextUser.loginError)
//       return
//     }
//     try {
//       setLoading(true);
//       await contextUser.login(values.email, values.password);
//       setLoading(false);
//       toast.success("Login successfully");
//       router.push("/dashboard");
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//       alert(error);
//     }
//   };
//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)}>
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem className="my-3">
//               <FormLabel>email</FormLabel>
//               <FormControl>
//                 <Input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="shad-input  focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-0"
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem className="my-3">
//               <FormLabel>password</FormLabel>
//               <FormControl>
//                 <Input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="shad-input  focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-0"
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button
//           className="w-full mt-4"
//           variant="purple"
//           type="submit"
//           disabled={pending}>
//           Submit
//         </Button>
//       </form>
//     </Form>
//   );
// };

// export default SignInForm;


