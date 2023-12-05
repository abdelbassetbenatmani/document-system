// "use client";
// import { SignupValidation } from "@/actions/Auth/Sign-up/shema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import React, { useState } from "react";
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
// import { useFormStatus } from "react-dom";
// // import { createUserAccount } from "@/actions/Auth/Sign-up";
// import { toast } from "sonner";
// import { account } from "@/config/appwrite";
// import { useUser } from "@/app/context/user";
// import { useRouter } from "next/navigation";
// type Props = {};

// const SignUpForm = (props: Props) => {
//   const { pending } = useFormStatus();
//   const [loading, setLoading] = useState<boolean>(false);
//   const router = useRouter()
//   const contextUser = useUser()
//   // 1. Define your form.
//   const form = useForm<z.infer<typeof SignupValidation>>({
//     resolver: zodResolver(SignupValidation),
//     defaultValues: {
//       name: "",
//       username: "",
//       email: "",
//       password: "",
//     },
//   });

//   // 2. Define a submit handler.
//   const onSubmit = async (values: z.infer<typeof SignupValidation>) => {

//     if (!contextUser) return

//         try {
//             setLoading(true)
//             await contextUser.register(values.name, values.email, values.password)
//             setLoading(false)
//             toast.success("Account created successfully");
//             router.push("/dashboard")
//         } catch (error) {
//             console.log(error)
//             setLoading(false)
//             alert(error)
//         }
//   };
//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="">
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem className="my-3">
//               <FormLabel>name</FormLabel>
//               <FormControl>
//                 <Input
//                   type="text"
//                   placeholder="Enter your name"
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
//           name="username"
//           render={({ field }) => (
//             <FormItem className="my-3">
//               <FormLabel>username</FormLabel>
//               <FormControl>
//                 <Input
//                   type="text"
//                   placeholder="Enter your username"
//                   className="shad-input  focus-visible:ring-0 focus-visible:ring-offset-0 ring-offset-light-0"
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
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

// export default SignUpForm;
