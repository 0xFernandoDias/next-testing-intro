import { render, screen } from "@testing-library/react"
import Home from "@/app/page"

describe("HomePage", () => {
	it("should have docs text", () => {
		render(<Home />) // ARRANGE

		const myElem = screen.getByRole("heading", {
			name: "docs",
		}) // ACT

		expect(myElem).toBeInTheDocument() // ASSERTION
	})
})
