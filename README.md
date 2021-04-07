# ChangeCXStorefront - VueStorefront-to-Shopify
This repository is to connect shopify ecommerce with vuestorefront

# How to start?
1)Configure packages/theme/nuxt.config.js to establish the connection to your Shopify store.
 *domain: 'yourdomain.myshopify.com',
 *storefrontAccessToken: 'your shopify store access token'

2) Install all required dependencies:
yarn install or yarn

3) (optional) Then you can verify if everything works properly by building all three projects:
yarn build

4) If everything built properly, you can start creating your new integration with:
yarn dev




# Notes
   
   The following  shopify access token is configured, Change it as requried
   
   File root: VueStorefront-to-Shopify --> packages --> theme --> nuxt.config.js (line number 80)
   
   domain: 'changecxstorefront.myshopify.com',
   storefrontAccessToken: '3ab753a21b8ca177e538be6e67cbed8d'
