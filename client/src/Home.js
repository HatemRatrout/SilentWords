import withRoot from './withRoot';

import React from 'react';
import ProductCategories from './views/ProductCategories';
import ProductSmokingHero from './views/ProductSmokingHero';
import AppFooter from './views/AppFooter';
import ProductHero from './views/ProductHero';
import ProductValues from './views/ProductValues';
import ProductHowItWorks from './views/ProductHowItWorks';
import ProductCTA from './views/ProductCTA';
import AppAppBar from './views/AppAppBar';

function Index() {
  return (
    
    //Homepage
    
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <AppFooter />
    </React.Fragment> 


    //Categories
    /*
    <React.Fragment>
      <AppAppBar />
      <ProductCategories />
    </React.Fragment> */

    //category
    /*
    <React.Fragment>
      <AppAppBar />
    </React.Fragment>
    */

  );
}

export default withRoot(Index);
