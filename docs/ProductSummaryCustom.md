📢 Use this project, [contribute](https://github.com/vtex-apps/product-summary/blob/master/docs/ProductSummaryCustom.md) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Product Summary Shelf

Product Summary Custom is a block exported by the Product Summary app responsible for rendering the Product Summary.

![](https://user-images.githubusercontent.com/40380674/96649443-7d21d480-1307-11eb-9100-534fa9e70ca6.png))

## Configuration

1. Add the [Product Summary app](https://vtex.io/docs/components/content-blocks/vtex.product-summary/) to your theme's dependencies on the `manifest.json`, for example:

```json
  dependencies: {
    "vtex.product-summary": "2.x"
  }
```

2. Declare the `product-summary.shelf` block.

```diff
{
+ "product-summary.shelf": {
+    "children": [
+      "product-summary-image",
+      "product-summary-name",
+      "product-rating-inline",
+      "product-summary-space",
+      "product-summary-price",
+      "product-summary-buy-button"
+    ]
+ }
}
```

3. Add the `product-summary.shelf` as a block of another component. The parent block needs to accepts `product-summary.shelf` as a block.

```diff
 {
   "product-summary.shelf": {
      "children": [
        "product-summary-image",
        "product-summary-name",
        "product-rating-inline",
        "product-summary-space",
        "product-summary-price",
        "product-summary-buy-button"
      ]
   },

   "list-context.product-list": {
+     "blocks": ["product-summary.shelf"]
   },
 }
```


| Prop name        | Type          | Description                            | Default value  |
| :--------------: | :---------: | :--------------------------: | :------------: |
| `priceBehavior` | `enum` | Whether the client-side should request the most up-to-date price (`async`) or not (`default`). Remember to also set the [Search Result](https://vtex.io/docs/components/content-blocks/vtex.search-result@3.79.1/#configuration)'s`simulationBehavior` prop to `skip` and use the Product Price's [`product-price-suspense`](https://github.com/vtex-apps/product-price/blob/master/docs/README.md) block to render a loading spinner while the simulation API is being fetched. | `default` |
