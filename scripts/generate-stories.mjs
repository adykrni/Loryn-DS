import fs from "node:fs"
import path from "node:path"

const UI = path.join(process.cwd(), "src/components/ui")

const stories = {
  accordion: `import type { Meta, StoryObj } from "@storybook/react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const meta: Meta<typeof Accordion> = { title: "UI/Accordion", component: Accordion }
export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Loryn?</AccordionTrigger>
        <AccordionContent>A contract-first design system.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do tokens work?</AccordionTrigger>
        <AccordionContent>Core tokens feed component tokens.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}`,

  alert: `import type { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const meta: Meta<typeof Alert> = { title: "UI/Alert", component: Alert }
export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: () => (
    <Alert className="max-w-md">
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>Your request access flow is ready to review.</AlertDescription>
    </Alert>
  ),
}`,

  "alert-dialog": `import type { Meta, StoryObj } from "@storybook/react"
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof AlertDialog> = { title: "UI/AlertDialog", component: AlertDialog }
export default meta
type Story = StoryObj<typeof AlertDialog>

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild><Button variant="outline">Delete project</Button></AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}`,

  "aspect-ratio": `import type { Meta, StoryObj } from "@storybook/react"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const meta: Meta<typeof AspectRatio> = { title: "UI/AspectRatio", component: AspectRatio }
export default meta
type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9} className="max-w-md overflow-hidden rounded-lg bg-muted">
      <div className="flex h-full items-center justify-center text-muted-foreground">16:9</div>
    </AspectRatio>
  ),
}`,

  attachment: `import type { Meta, StoryObj } from "@storybook/react"
import { Attachment, AttachmentContent, AttachmentDescription, AttachmentTitle } from "@/components/ui/attachment"

const meta: Meta<typeof Attachment> = { title: "UI/Attachment", component: Attachment }
export default meta
type Story = StoryObj<typeof Attachment>

export const Default: Story = {
  render: () => (
    <Attachment className="max-w-sm">
      <AttachmentContent>
        <AttachmentTitle>design-spec.pdf</AttachmentTitle>
        <AttachmentDescription>2.4 MB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  ),
}`,

  avatar: `import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const meta: Meta<typeof Avatar> = { title: "UI/Avatar", component: Avatar }
export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>LK</AvatarFallback>
    </Avatar>
  ),
}
export const Fallback: Story = {
  render: () => <Avatar><AvatarFallback>AD</AvatarFallback></Avatar>,
}`,

  badge: `import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "@/components/ui/badge"

const meta: Meta<typeof Badge> = { title: "UI/Badge", component: Badge }
export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = { args: { children: "Beta" } }
export const Secondary: Story = { args: { variant: "secondary", children: "Draft" } }
export const Outline: Story = { args: { variant: "outline", children: "New" } }`,

  breadcrumb: `import type { Meta, StoryObj } from "@storybook/react"
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const meta: Meta<typeof Breadcrumb> = { title: "UI/Breadcrumb", component: Breadcrumb }
export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}`,

  bubble: `import type { Meta, StoryObj } from "@storybook/react"
import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble"

const meta: Meta<typeof Bubble> = { title: "UI/Bubble", component: Bubble }
export default meta
type Story = StoryObj<typeof Bubble>

export const Default: Story = {
  render: () => (
    <BubbleGroup>
      <Bubble><BubbleContent>Hello from Loryn</BubbleContent></Bubble>
      <Bubble><BubbleContent>How can I help?</BubbleContent></Bubble>
    </BubbleGroup>
  ),
}`,

  "button-group": `import type { Meta, StoryObj } from "@storybook/react"
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof ButtonGroup> = { title: "UI/ButtonGroup", component: ButtonGroup }
export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>Label</ButtonGroupText>
      <ButtonGroupSeparator />
      <Button variant="outline">One</Button>
      <Button variant="outline">Two</Button>
    </ButtonGroup>
  ),
}`,

  calendar: `import type { Meta, StoryObj } from "@storybook/react"
import { Calendar } from "@/components/ui/calendar"

const meta: Meta<typeof Calendar> = { title: "UI/Calendar", component: Calendar }
export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  render: () => <Calendar mode="single" className="rounded-lg border" />,
}`,

  card: `import type { Meta, StoryObj } from "@storybook/react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Card> = { title: "UI/Card", component: Card }
export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Request access</CardTitle>
        <CardDescription>Submit your details to join the workspace.</CardDescription>
      </CardHeader>
      <CardContent><p className="text-sm text-muted-foreground">Form fields go here.</p></CardContent>
      <CardFooter><Button className="w-full">Continue</Button></CardFooter>
    </Card>
  ),
}`,

  carousel: `import type { Meta, StoryObj } from "@storybook/react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const meta: Meta<typeof Carousel> = { title: "UI/Carousel", component: Carousel }
export default meta
type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  render: () => (
    <Carousel className="mx-auto w-full max-w-xs">
      <CarouselContent>
        {[1, 2, 3].map((n) => (
          <CarouselItem key={n}>
            <Card><CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-2xl font-semibold">{n}</span></CardContent></Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious /><CarouselNext />
    </Carousel>
  ),
}`,

  chart: `import type { Meta, StoryObj } from "@storybook/react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 305 },
  { month: "Mar", desktop: 237 },
]

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--primary)" },
}

const meta: Meta<typeof ChartContainer> = { title: "UI/Chart", component: ChartContainer }
export default meta
type Story = StoryObj<typeof ChartContainer>

export const Default: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full max-w-md">
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
}`,

  checkbox: `import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const meta: Meta<typeof Checkbox> = { title: "UI/Checkbox", component: Checkbox }
export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}`,

  collapsible: `import type { Meta, StoryObj } from "@storybook/react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Collapsible> = { title: "UI/Collapsible", component: Collapsible }
export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: () => (
    <Collapsible className="w-full max-w-md space-y-2">
      <CollapsibleTrigger asChild><Button variant="outline">Toggle details</Button></CollapsibleTrigger>
      <CollapsibleContent className="rounded-lg border p-4 text-sm">Hidden content revealed on toggle.</CollapsibleContent>
    </Collapsible>
  ),
}`,

  combobox: `import type { Meta, StoryObj } from "@storybook/react"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, useComboboxAnchor } from "@/components/ui/combobox"

const meta: Meta<typeof Combobox> = { title: "UI/Combobox", component: Combobox }
export default meta
type Story = StoryObj<typeof Combobox>

export const Default: Story = {
  render: function ComboboxStory() {
    const anchor = useComboboxAnchor()
    return (
      <Combobox>
        <div ref={anchor} className="w-full max-w-xs">
          <ComboboxInput placeholder="Select framework..." />
        </div>
        <ComboboxContent anchor={anchor}>
          <ComboboxList>
            <ComboboxItem value="next">Next.js</ComboboxItem>
            <ComboboxItem value="react">React</ComboboxItem>
            <ComboboxItem value="vue">Vue</ComboboxItem>
            <ComboboxEmpty>No results.</ComboboxEmpty>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    )
  },
}`,

  command: `import type { Meta, StoryObj } from "@storybook/react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"

const meta: Meta<typeof Command> = { title: "UI/Command", component: Command }
export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => (
    <Command className="max-w-md rounded-lg border">
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}`,

  "context-menu": `import type { Meta, StoryObj } from "@storybook/react"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"

const meta: Meta<typeof ContextMenu> = { title: "UI/ContextMenu", component: ContextMenu }
export default meta
type Story = StoryObj<typeof ContextMenu>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Settings</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}`,

  dialog: `import type { Meta, StoryObj } from "@storybook/react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Dialog> = { title: "UI/Dialog", component: Dialog }
export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild><Button variant="outline">Open dialog</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request access</DialogTitle>
          <DialogDescription>Fill in your details to continue.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
}`,

  direction: `import type { Meta, StoryObj } from "@storybook/react"
import { DirectionProvider } from "@/components/ui/direction"

const meta: Meta<typeof DirectionProvider> = { title: "UI/Direction", component: DirectionProvider }
export default meta
type Story = StoryObj<typeof DirectionProvider>

export const LTR: Story = {
  render: () => <DirectionProvider direction="ltr"><p className="p-4">Left-to-right layout</p></DirectionProvider>,
}
export const RTL: Story = {
  render: () => <DirectionProvider direction="rtl"><p className="p-4">Right-to-left layout</p></DirectionProvider>,
}`,

  drawer: `import type { Meta, StoryObj } from "@storybook/react"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Drawer> = { title: "UI/Drawer", component: Drawer }
export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild><Button variant="outline">Open drawer</Button></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer title</DrawerTitle>
          <DrawerDescription>Drawer description goes here.</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  ),
}`,

  "dropdown-menu": `import type { Meta, StoryObj } from "@storybook/react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof DropdownMenu> = { title: "UI/DropdownMenu", component: DropdownMenu }
export default meta
type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild><Button variant="outline">Open menu</Button></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}`,

  empty: `import type { Meta, StoryObj } from "@storybook/react"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Empty> = { title: "UI/Empty", component: Empty }
export default meta
type Story = StoryObj<typeof Empty>

export const Default: Story = {
  render: () => (
    <Empty className="max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon">📭</EmptyMedia>
        <EmptyTitle>No results</EmptyTitle>
        <EmptyDescription>Try adjusting your search or filters.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent><Button variant="outline" size="sm">Clear filters</Button></EmptyContent>
    </Empty>
  ),
}`,

  field: `import type { Meta, StoryObj } from "@storybook/react"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const meta: Meta<typeof Field> = { title: "UI/Field", component: Field }
export default meta
type Story = StoryObj<typeof Field>

export const Default: Story = {
  render: () => (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="you@example.com" />
        <FieldDescription>We will never share your email.</FieldDescription>
      </Field>
    </FieldGroup>
  ),
}`,

  "hover-card": `import type { Meta, StoryObj } from "@storybook/react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof HoverCard> = { title: "UI/HoverCard", component: HoverCard }
export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild><Button variant="link">@loryn</Button></HoverCardTrigger>
      <HoverCardContent className="w-64">The Loryn design system — contract-first components.</HoverCardContent>
    </HoverCard>
  ),
}`,

  input: `import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "@/components/ui/input"

const meta: Meta<typeof Input> = { title: "UI/Input", component: Input }
export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = { args: { placeholder: "Email address" } }
export const Disabled: Story = { args: { placeholder: "Disabled", disabled: true } }`,

  "input-group": `import type { Meta, StoryObj } from "@storybook/react"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group"

const meta: Meta<typeof InputGroup> = { title: "UI/InputGroup", component: InputGroup }
export default meta
type Story = StoryObj<typeof InputGroup>

export const Default: Story = {
  render: () => (
    <InputGroup className="max-w-sm">
      <InputGroupAddon><InputGroupText>https://</InputGroupText></InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>
  ),
}`,

  "input-otp": `import type { Meta, StoryObj } from "@storybook/react"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

const meta: Meta<typeof InputOTP> = { title: "UI/InputOTP", component: InputOTP }
export default meta
type Story = StoryObj<typeof InputOTP>

export const Default: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} /><InputOTPSlot index={1} /><InputOTPSlot index={2} />
        <InputOTPSlot index={3} /><InputOTPSlot index={4} /><InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}`,

  item: `import type { Meta, StoryObj } from "@storybook/react"
import { Item, ItemContent, ItemDescription, ItemGroup, ItemTitle } from "@/components/ui/item"

const meta: Meta<typeof Item> = { title: "UI/Item", component: Item }
export default meta
type Story = StoryObj<typeof Item>

export const Default: Story = {
  render: () => (
    <ItemGroup className="max-w-sm">
      <Item>
        <ItemContent>
          <ItemTitle>Design tokens</ItemTitle>
          <ItemDescription>Core and component token layers.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
}`,

  kbd: `import type { Meta, StoryObj } from "@storybook/react"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

const meta: Meta<typeof Kbd> = { title: "UI/Kbd", component: Kbd }
export default meta
type Story = StoryObj<typeof Kbd>

export const Default: Story = {
  render: () => <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup>,
}`,

  label: `import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "@/components/ui/label"

const meta: Meta<typeof Label> = { title: "UI/Label", component: Label }
export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = { args: { children: "Email address", htmlFor: "email" } }`,

  marker: `import type { Meta, StoryObj } from "@storybook/react"
import { Marker, MarkerContent } from "@/components/ui/marker"

const meta: Meta<typeof Marker> = { title: "UI/Marker", component: Marker }
export default meta
type Story = StoryObj<typeof Marker>

export const Default: Story = {
  render: () => <Marker><MarkerContent>1</MarkerContent></Marker>,
}`,

  menubar: `import type { Meta, StoryObj } from "@storybook/react"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"

const meta: Meta<typeof Menubar> = { title: "UI/Menubar", component: Menubar }
export default meta
type Story = StoryObj<typeof Menubar>

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarItem>Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}`,

  message: `import type { Meta, StoryObj } from "@storybook/react"
import { Message, MessageAvatar, MessageContent, MessageGroup, MessageHeader } from "@/components/ui/message"

const meta: Meta<typeof Message> = { title: "UI/Message", component: Message }
export default meta
type Story = StoryObj<typeof Message>

export const Default: Story = {
  render: () => (
    <MessageGroup className="max-w-md">
      <Message>
        <MessageAvatar>LK</MessageAvatar>
        <MessageContent>
          <MessageHeader>Loryn</MessageHeader>
          <div className="rounded-lg bg-muted px-3 py-2">Welcome to the design system.</div>
        </MessageContent>
      </Message>
    </MessageGroup>
  ),
}`,

  "message-scroller": `import type { Meta, StoryObj } from "@storybook/react"
import { MessageScroller, MessageScrollerContent, MessageScrollerProvider, MessageScrollerViewport } from "@/components/ui/message-scroller"

const meta: Meta<typeof MessageScroller> = { title: "UI/MessageScroller", component: MessageScroller }
export default meta
type Story = StoryObj<typeof MessageScroller>

export const Default: Story = {
  render: () => (
    <MessageScrollerProvider>
      <MessageScroller className="h-48 w-full max-w-md rounded-lg border">
        <MessageScrollerViewport>
          <MessageScrollerContent className="space-y-2 p-4">
            <p className="text-sm">Message one</p>
            <p className="text-sm">Message two</p>
            <p className="text-sm">Message three</p>
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
    </MessageScrollerProvider>
  ),
}`,

  "native-select": `import type { Meta, StoryObj } from "@storybook/react"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

const meta: Meta<typeof NativeSelect> = { title: "UI/NativeSelect", component: NativeSelect }
export default meta
type Story = StoryObj<typeof NativeSelect>

export const Default: Story = {
  render: () => (
    <NativeSelect className="max-w-xs">
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="orange">Orange</NativeSelectOption>
    </NativeSelect>
  ),
}`,

  "navigation-menu": `import type { Meta, StoryObj } from "@storybook/react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"

const meta: Meta<typeof NavigationMenu> = { title: "UI/NavigationMenu", component: NavigationMenu }
export default meta
type Story = StoryObj<typeof NavigationMenu>

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem><NavigationMenuLink href="#">Home</NavigationMenuLink></NavigationMenuItem>
        <NavigationMenuItem><NavigationMenuLink href="#">Components</NavigationMenuLink></NavigationMenuItem>
        <NavigationMenuItem><NavigationMenuLink href="#">Docs</NavigationMenuLink></NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}`,

  pagination: `import type { Meta, StoryObj } from "@storybook/react"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

const meta: Meta<typeof Pagination> = { title: "UI/Pagination", component: Pagination }
export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}`,

  popover: `import type { Meta, StoryObj } from "@storybook/react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Popover> = { title: "UI/Popover", component: Popover }
export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild><Button variant="outline">Open popover</Button></PopoverTrigger>
      <PopoverContent className="w-64">Popover content goes here.</PopoverContent>
    </Popover>
  ),
}`,

  progress: `import type { Meta, StoryObj } from "@storybook/react"
import { Progress } from "@/components/ui/progress"

const meta: Meta<typeof Progress> = { title: "UI/Progress", component: Progress }
export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = { args: { value: 60 } }`,

  questionnaire: `import type { Meta, StoryObj } from "@storybook/react"
import { Questionnaire, QuestionnaireDescription, QuestionnaireItem, QuestionnaireTitle } from "@/components/ui/questionnaire"

const meta: Meta<typeof Questionnaire> = { title: "UI/Questionnaire", component: Questionnaire }
export default meta
type Story = StoryObj<typeof Questionnaire>

export const Default: Story = {
  render: () => (
    <Questionnaire className="max-w-md">
      <QuestionnaireItem>
        <QuestionnaireTitle>Quick survey</QuestionnaireTitle>
        <QuestionnaireDescription>Help us improve the design system.</QuestionnaireDescription>
      </QuestionnaireItem>
    </Questionnaire>
  ),
}`,

  "radio-group": `import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const meta: Meta<typeof RadioGroup> = { title: "UI/RadioGroup", component: RadioGroup }
export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable" className="space-y-2">
      <div className="flex items-center gap-2"><RadioGroupItem value="default" id="r1" /><Label htmlFor="r1">Default</Label></div>
      <div className="flex items-center gap-2"><RadioGroupItem value="comfortable" id="r2" /><Label htmlFor="r2">Comfortable</Label></div>
    </RadioGroup>
  ),
}`,

  resizable: `import type { Meta, StoryObj } from "@storybook/react"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

const meta: Meta<typeof ResizablePanelGroup> = { title: "UI/Resizable", component: ResizablePanelGroup }
export default meta
type Story = StoryObj<typeof ResizablePanelGroup>

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="min-h-[200px] max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-6">Panel A</div></ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-6">Panel B</div></ResizablePanel>
    </ResizablePanelGroup>
  ),
}`,

  "scroll-area": `import type { Meta, StoryObj } from "@storybook/react"
import { ScrollArea } from "@/components/ui/scroll-area"

const meta: Meta<typeof ScrollArea> = { title: "UI/ScrollArea", component: ScrollArea }
export default meta
type Story = StoryObj<typeof ScrollArea>

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-48 w-48 rounded-md border p-4">
      {Array.from({ length: 20 }, (_, i) => <p key={i} className="text-sm">Item {i + 1}</p>)}
    </ScrollArea>
  ),
}`,

  select: `import type { Meta, StoryObj } from "@storybook/react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const meta: Meta<typeof Select> = { title: "UI/Select", component: Select }
export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]"><SelectValue placeholder="Select a fruit" /></SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  ),
}`,

  separator: `import type { Meta, StoryObj } from "@storybook/react"
import { Separator } from "@/components/ui/separator"

const meta: Meta<typeof Separator> = { title: "UI/Separator", component: Separator }
export default meta
type Story = StoryObj<typeof Separator>

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-xs space-y-2 text-sm">
      <p>Section one</p>
      <Separator />
      <p>Section two</p>
    </div>
  ),
}`,

  sheet: `import type { Meta, StoryObj } from "@storybook/react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Sheet> = { title: "UI/Sheet", component: Sheet }
export default meta
type Story = StoryObj<typeof Sheet>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Open sheet</Button></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet title</SheetTitle>
          <SheetDescription>Sheet description goes here.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}`,

  sidebar: `import type { Meta, StoryObj } from "@storybook/react"
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider,
} from "@/components/ui/sidebar"

const meta: Meta<typeof SidebarProvider> = { title: "UI/Sidebar", component: SidebarProvider }
export default meta
type Story = StoryObj<typeof SidebarProvider>

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar className="relative h-64 w-64 border rounded-lg">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem><SidebarMenuButton isActive>Dashboard</SidebarMenuButton></SidebarMenuItem>
                <SidebarMenuItem><SidebarMenuButton>Components</SidebarMenuButton></SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  ),
}`,

  skeleton: `import type { Meta, StoryObj } from "@storybook/react"
import { Skeleton } from "@/components/ui/skeleton"

const meta: Meta<typeof Skeleton> = { title: "UI/Skeleton", component: Skeleton }
export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
}`,

  slider: `import type { Meta, StoryObj } from "@storybook/react"
import { Slider } from "@/components/ui/slider"

const meta: Meta<typeof Slider> = { title: "UI/Slider", component: Slider }
export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => <Slider defaultValue={[50]} max={100} step={1} className="w-full max-w-xs" />,
}`,

  sonner: `import type { Meta, StoryObj } from "@storybook/react"
import { ThemeProvider } from "next-themes"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"

const meta: Meta<typeof Toaster> = { title: "UI/Sonner", component: Toaster }
export default meta
type Story = StoryObj<typeof Toaster>

export const Default: Story = {
  render: () => (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <Button onClick={() => toast("Event has been created")}>Show toast</Button>
      <Toaster />
    </ThemeProvider>
  ),
}`,

  spinner: `import type { Meta, StoryObj } from "@storybook/react"
import { Spinner } from "@/components/ui/spinner"

const meta: Meta<typeof Spinner> = { title: "UI/Spinner", component: Spinner }
export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = { render: () => <Spinner /> }`,

  switch: `import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const meta: Meta<typeof Switch> = { title: "UI/Switch", component: Switch }
export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane mode</Label>
    </div>
  ),
}`,

  table: `import type { Meta, StoryObj } from "@storybook/react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const meta: Meta<typeof Table> = { title: "UI/Table", component: Table }
export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => (
    <Table className="max-w-lg">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow><TableCell>Button</TableCell><TableCell>Ready</TableCell></TableRow>
        <TableRow><TableCell>Input</TableCell><TableCell>Ready</TableCell></TableRow>
      </TableBody>
    </Table>
  ),
}`,

  tabs: `import type { Meta, StoryObj } from "@storybook/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const meta: Meta<typeof Tabs> = { title: "UI/Tabs", component: Tabs }
export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
}`,

  textarea: `import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "@/components/ui/textarea"

const meta: Meta<typeof Textarea> = { title: "UI/Textarea", component: Textarea }
export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = { args: { placeholder: "Tell us more..." } }`,

  toggle: `import type { Meta, StoryObj } from "@storybook/react"
import { BoldIcon } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

const meta: Meta<typeof Toggle> = { title: "UI/Toggle", component: Toggle }
export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  render: () => <Toggle aria-label="Toggle bold"><BoldIcon /></Toggle>,
}`,

  "toggle-group": `import type { Meta, StoryObj } from "@storybook/react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const meta: Meta<typeof ToggleGroup> = { title: "UI/ToggleGroup", component: ToggleGroup }
export default meta
type Story = StoryObj<typeof ToggleGroup>

export const Default: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  ),
}`,

  tooltip: `import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const meta: Meta<typeof Tooltip> = { title: "UI/Tooltip", component: Tooltip }
export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild><Button variant="outline">Hover me</Button></TooltipTrigger>
      <TooltipContent>Tooltip content</TooltipContent>
    </Tooltip>
  ),
}`,
}

let written = 0
for (const [name, content] of Object.entries(stories)) {
  const file = path.join(UI, `${name}.stories.tsx`)
  if (fs.existsSync(file)) {
    console.log(`skip ${name} (exists)`)
    continue
  }
  fs.writeFileSync(file, content + "\n")
  written++
  console.log(`wrote ${name}.stories.tsx`)
}

console.log(`\nDone: ${written} story files written.`)
