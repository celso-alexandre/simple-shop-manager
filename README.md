# Simple Shop Manager

## MVP
- [x] Single user / No user auth / admin auth (preferred)
- [x] Allow to register comissioned providers
- [x] Allow to register products
   - [x] Cost type: prepaid or postpaid (consignation)
   - [x] If postpaid: allow to assign a provider to be paid
- [ ] List me the comission on every sale (prepaid)
- [ ] List me margin on every sale and its summup
- [ ] Allow to register a new product on sale
- [ ] Stock management
   - [x] Adjust stock in product edit page
   - [x] Auto-debit product stock quantity on sale (if product "controlsQty" = true)
   - [x] Correctly handle sale edit regarding stock
   - [x] Mantain a history of stock changes
   - [ ] Arrival of new product (allow to quickly increment balance of multiple products at once)

## Screenshots
### Sale
![Sale List](/screenshot/1-sale-list.png "Sale List")
![New Sale](/screenshot/2-sale-new.png "New Sale")
### Product
![Product List](/screenshot/3-product-list.png "Product List")
![New Product](/screenshot/4-product-new.png "New Product")
### Provider
![Provider List](/screenshot/5-provider-list.png "Provider List")
![New Provider](/screenshot/6-provider-new.png "New Provider")
