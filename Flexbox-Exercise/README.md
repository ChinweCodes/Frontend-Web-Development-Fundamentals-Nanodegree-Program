Suppose that we want to get all three of the boxes to stay in a vertical stack, but move over to the right side. How can we do this?
Well, first let's try this: Add float:right; to the .box class, so that the boxes float on the right side of the page.

OK, so trying to float the boxes on the right individually didn't do what we wanted—they ended up in a horizontal row, rather than staying in a vertical stack.
To solve this, we can put the three boxes inside a fourth box. By wrapping them in a container like this, we can then move the container around without changing the arrangement of the boxes inside.

- Remove the float:right; rule from the .box class, so that the boxes go back to a vertical arrangement.
- Nest the div elements for the three boxes inside a fourth div (this fourth div is the "container").
- Create a class for the container. We called ours .container, but you can use whatever name you like.
- Float the container (with the three boxes inside of it) to the right.

In the workspace below, Go ahead and try applying the two flexbox properties (display and flex-wrap).
Note that these get added to the container element, not the inner boxes.
You should end up with a horizontal row of boxes that wraps when the browser window is resized.Remove the float:right; rule from the .box class, so that the boxes go back to a vertical arrangement.
Nest the div elements for the three boxes inside a fourth div (this fourth div is the "container").
Create a class for the container. We called ours .container, but you can use whatever name you like.
Float the container (with the three boxes inside of it) to the right.