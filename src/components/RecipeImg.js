import React from 'react';
import Image from "../pancakes.jpg"
;import { Card, CardImg } from 'reactstrap';

const RecipeImg = (props) => {
    return (
        <div>
          <Card>
            <CardImg src={Image} class="img-thumbnail" alt="pancakes" />
          </Card>
        </div>
    )
}

export default RecipeImg;