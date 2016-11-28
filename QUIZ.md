# Back End Quiz

Create an express/mongo server for simple image list management

## Rules

* You must complete by on your own
* Fork this repo and submit as usual
* You may use the following resources:
    * ExpressJS site
    * Mongoose site
    * NodeJS site
    * Any code that you've written (solo or pair), but you must retype
* You may install npm packages of your choosing
* Use general best practices that make sense
* You may ignore the presense or absense of `__v` mongoose property on 
any data format requirements
* There is a testing requirement (after the API section)
* Work through the API requirements in order, you may not finish everything
in alotted time. Submit what you have. 
* You may, if you think prudent, simplify your architecture from the full style we learned in class
* You have 90 minutes to complete

## API Requirements

### Accepts post of image to add to collection

POST to `/images`:

```
{
    title: <title>,
    description: <description>,
    category: <animals|food|places>,
    url: <url> 
}
```

* `title`, `category`, and `url` are required
* `category` should be limited to one of specified values (animals|food|places)

If any of those conditions are not met, return a 400 status code.

POST should return the same format as GET to `/images/:id`:

### Retrieve list of images

GET to `/images`:

```
[
    { _id: "123abc", title: "titleOne", category: "animals" },
    { _id: "456def", title: "titleTwo", category: "animals" },
    { _id: "789ghi", title: "titleThree", category: "food" }
]
```

* Notice fieldset being returned
* Return empty array if no images

### Retreive image detail

GET to `/images/:id`:

```
{ 
    _id: "123abc", 
    title: "cute kitten at table", 
    category: "animals",
    description: "adorable kitten doing lunch",
    url: "http://image.png" 
}
```

* Notice fieldset being returned
* Return 404 if id doesn't exist

### Retrieve list of images in one category

GET to `/images?category=animals`:

```
[
    { _id: "123abc", title: "titleOne", category: "animals" },
    { _id: "456def", title: "titleTwo", category: "animals" }
]
```

* Same fieldset as normal GET of images
* Return empty array if no images
* If category not one of three defined categories, return 400

## Testing

You only need to include the following e2e test:

* POST an image
* use returned id to GET same image
* assert that `title`, `description`, `category`, and `url` are equal
to orignally supplied data.
