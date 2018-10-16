# React + Flow challenge

### `<DescriptionWithLinks />`

`<DescriptionWithLinks />` (`components/descriptionWithLinks.js`) is a component that would display a description on 
a website. Currently it just puts the text on the page, but we would like you to add the ability to replace some links
with `<a>` tags. The component takes a `description` prop which is the description text including any links and a
`links` prop which is an array of `{url: "...", text: "..."}`. The resulting HTML should include the description text
 with any links replaced with `<Link url="url">text</Link>` where `url` and `text` come from the `links` prop and
 `<Link>` is from `components/link.js`.
 
For example, given the props `description="go to www.bbc.co.uk!", links={[{url: 'www.bbc.co.uk', text: 'The BBC'}]}`
it would render as:

```javascript
<div>go to <Link url="www.bbc.co.uk">The BBC</Link>!</div>
```

### Loading/error states

The `<City />` and `<Name />` presentational components (`components/city.js` and `components/name.js` respectively)
have some code repetition that we would like to make generic using a higher order component. Provide a wrapper function
that can be used to simplify both components to:

```javascript
function Name(props: any) {
    return <h2>{props.data.name}</h2>;
}

export default wrapper(Name);
```

and implement it for both components.