import Example from "./Example"
import {render} from "react/testing/library"
test("Test the title",()=>{
    render (<Example/>);
    const title = screen.getByText("Example")
    expect (title.toBeInTheDocument())
})