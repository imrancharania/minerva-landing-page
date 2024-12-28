"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation"
import { useFormStatus } from "react-dom"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
    firstName: z.string().min(1, {message: "This field is required."}),
    lastName: z.string().min(1, {message: "This field is required"}),
    email: z.string()
    .min(1, { message: "This field is required." })
    .email("Invalid email address."),
    company: z.string().min(1, {message: "This field is required"})
})

export default function SellerForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            company: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        return redirect("/success")
    }

    const {pending} = useFormStatus();

    return (
<>
        {pending ? (<Loader2 className="size-4 animate-spin"/>) : (<Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 text-center justify-center">
            <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} placeholder="First Name"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} placeholder="Last Name"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} placeholder="Email"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} placeholder="Company"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="relative">Submit</Button>
            </form>
        </Form>)}
        </>
    );
}