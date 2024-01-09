"use client"

import {Metadata} from "next"
import {CounterClockwiseClockIcon} from "@radix-ui/react-icons"

import {Button} from "@/components/ui/base/button"
import {Separator} from "@/components/ui/base/separator"
import {
    Tabs,
    TabsContent,
} from "@/components/ui/base/tabs"
import {Input} from "@/components/ui/base/input"
import {Textarea} from "@/components/ui/base/textarea"
import {PresetSelector} from "@/components/table/create/preset-selector"
import {presets} from "@/components/table/create/data/presets"
import {useRef} from "react";
import dynamic from "next/dynamic";
import {FormSelect} from "@/components/ui/form/form-select";
import {FormSwitch} from "@/components/ui/form/form-switch";
import FormEditor from "@/components/ui/form/form-editor";

export const metadata: Metadata = {
    title: "Tasks",
    description: "A task and issue tracker build using Tanstack TableShow.",
}

export default function TableEditor() {
    const FormEditor = dynamic(() => import("@/components/ui/form/form-editor"), {ssr: false});
    const context = useRef('')
    const toSubmit = () => {
        console.log(111, context.current)
    }
    return (
        <>
            <div className="h-full flex-col flex">
                <div
                    className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
                    <PresetSelector presets={presets}/>
                </div>
                <Separator/>
                <Tabs defaultValue="complete" className="flex-1">
                    <div className="container h-full py-6">
                        <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
                            <div className="hidden flex-col space-y-4 sm:flex md:order-2">
                                  <span
                                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    分类
                                  </span>
                                <FormSelect/>
                                <span
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    标签
                                  </span>
                                <FormSelect/>
                                <span
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                是否发布
                              </span>
                                <FormSwitch/>
                            </div>
                            <div className="md:order-1">
                                <TabsContent value="complete" className="mt-0 border-0 p-0">
                                    <div className="flex h-full flex-col space-y-4">
                                        <Input type="email" placeholder="标题"/>
                                        <FormEditor context={context}/>
                                        <div className="flex items-center space-x-2">
                                            <Button onClick={toSubmit}>Submit</Button>
                                            <Button variant="secondary">
                                                <span className="sr-only">Show history</span>
                                                <CounterClockwiseClockIcon className="h-4 w-4"/>
                                            </Button>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="insert" className="mt-0 border-0 p-0">
                                    <div className="flex flex-col space-y-4">
                                        <div className="grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1">
                                            <Textarea
                                                placeholder="We're writing to [inset]. Congrats from OpenAI!"
                                                className="h-full min-h-[300px] lg:min-h-[700px] xl:min-h-[700px]"
                                            />
                                            <div className="rounded-md border bg-muted"></div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Button>Submit</Button>
                                            <Button variant="secondary">
                                                <span className="sr-only">Show history</span>
                                                <CounterClockwiseClockIcon className="h-4 w-4"/>
                                            </Button>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </>
    )
}
