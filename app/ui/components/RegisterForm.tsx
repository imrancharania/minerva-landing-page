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
    email: z.string()
    .min(1, { message: "This field is required." })
    .email("Invalid email address."),
})

export default function RegisterForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-x-2 mt-4 text-center justify-center">
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
                <Button type="submit" className="relative">Submit</Button>
            </form>
        </Form>)}
        </>
    );
}