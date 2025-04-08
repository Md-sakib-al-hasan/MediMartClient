
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
 const UserDetails = () => {
  

                      return (
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-[#24aeb1]">{`sakib`}</h3>
                            <p className="text-sm text-muted-foreground">{`sakib`}</p>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Status:</span>
                              <span>{`sakib`}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Total Orders:</span>
                              <span>{`sakib`}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Total Spent:</span>
                              <span>{`sakib`}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Last Order:</span>
                              <span>{`sakib`}</span>
                            </div>
                          </div>

                          <Tabs defaultValue="orders">
                            <TabsList className="w-full">
                              <TabsTrigger value="orders" className="flex-1">
                                Orders
                              </TabsTrigger>
                              <TabsTrigger value="activity" className="flex-1">
                                Activity
                              </TabsTrigger>
                            </TabsList>
                            <TabsContent value="orders" className="space-y-4 pt-3">
                              <div className="rounded-lg border p-3">
                                <div className="flex justify-between">
                                  <div>
                                    <p className="text-sm font-medium">Order #1089</p>
                                    <p className="text-xs text-muted-foreground">May 15, 2023</p>
                                  </div>
                                  <p className="text-sm font-medium">$240.00</p>
                                </div>
                                <div className="mt-2 text-xs text-muted-foreground">
                                  <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                    Delivered
                                  </span>
                                </div>
                              </div>

                              <div className="rounded-lg border p-3">
                                <div className="flex justify-between">
                                  <div>
                                    <p className="text-sm font-medium">Order #1082</p>
                                    <p className="text-xs text-muted-foreground">May 8, 2023</p>
                                  </div>
                                  <p className="text-sm font-medium">$175.00</p>
                                </div>
                                <div className="mt-2 text-xs text-muted-foreground">
                                  <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                    Delivered
                                  </span>
                                </div>
                              </div>

                              <div className="rounded-lg border p-3">
                                <div className="flex justify-between">
                                  <div>
                                    <p className="text-sm font-medium">Order #1076</p>
                                    <p className="text-xs text-muted-foreground">Apr 30, 2023</p>
                                  </div>
                                  <p className="text-sm font-medium">$120.00</p>
                                </div>
                                <div className="mt-2 text-xs text-muted-foreground">
                                  <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                    Delivered
                                  </span>
                                </div>
                              </div>

                              
                            </TabsContent>
                            <TabsContent value="activity" className="space-y-4 pt-3">
                              <div className="space-y-4">
                                <div className="flex gap-2">
                                  <div className="relative mt-0.5">
                                    <div className="h-2 w-2 rounded-full bg-[#24aeb1]" />
                                    <div className="absolute bottom-0 left-1/2 top-2 w-px -translate-x-1/2 bg-border" />
                                  </div>
                                  <div className="space-y-0.5">
                                    <p className="text-sm">
                                      Placed an order <span className="font-medium">#1089</span>
                                    </p>
                                    <p className="text-xs text-muted-foreground">May 15, 2023</p>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <div className="relative mt-0.5">
                                    <div className="h-2 w-2 rounded-full bg-[#24aeb1]" />
                                    <div className="absolute bottom-0 left-1/2 top-2 w-px -translate-x-1/2 bg-border" />
                                  </div>
                                  <div className="space-y-0.5">
                                    <p className="text-sm">Updated their profile information</p>
                                    <p className="text-xs text-muted-foreground">May 12, 2023</p>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <div className="relative mt-0.5">
                                    <div className="h-2 w-2 rounded-full bg-[#24aeb1]" />
                                    <div className="absolute bottom-0 left-1/2 top-2 w-px -translate-x-1/2 bg-border" />
                                  </div>
                                  <div className="space-y-0.5">
                                    <p className="text-sm">
                                      Placed an order <span className="font-medium">#1082</span>
                                    </p>
                                    <p className="text-xs text-muted-foreground">May 8, 2023</p>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <div className="relative mt-0.5">
                                    <div className="h-2 w-2 rounded-full bg-[#24aeb1]" />
                                  </div>
                                  <div className="space-y-0.5">
                                    <p className="text-sm">Account created</p>
                                    <p className="text-xs text-muted-foreground">Apr 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </TabsContent>
                          </Tabs>

                          
                        </div>
                      
                      )
}

export default UserDetails;