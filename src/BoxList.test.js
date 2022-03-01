import React from "react";
import {render} from "@testing-library/react";
import BoxList from "./BoxList"

// smoke test
it("renders without crashing", function() {
    render(<BoxList />)
})

// snapshot test
it("matches snapshot", () => {
    const {asFragment} = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot();
});