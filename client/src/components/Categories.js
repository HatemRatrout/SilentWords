import withRoot from '../withRoot';

import React from 'react';
import ProductCategories from '../views/ProductCategories';
import ProductSmokingHero from '../views/ProductSmokingHero';
import AppFooter from '../views/AppFooter';
import ProductHero from '../views/ProductHero';
import ProductValues from '../views/ProductValues';
import ProductHowItWorks from '../views/ProductHowItWorks';
import ProductCTA from '../views/ProductCTA';
import AppAppBar from '../views/AppAppBar';

function Index() {
  return (

    //Categories
    
    <React.Fragment>
      <AppAppBar />
      <ProductCategories />
      <ProductSmokingHero />
    </React.Fragment> 
  );
}

export default withRoot(Index);