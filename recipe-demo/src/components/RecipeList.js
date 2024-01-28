import React, { useState } from 'react';
import { Card, Button, Modal, Container, Row, Col } from 'react-bootstrap';

const RecipeList = () => {
  const recipes = [
    {
      title: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Black Pepper"],
      instructions: "Cook pasta. In separate pan, cook pancetta. Whisk eggs and Parmesan, then combine with pasta and pancetta. Season with pepper.",
      image: "https://media.istockphoto.com/id/177413384/photo/pasta-with-carbonara.jpg?s=1024x1024&w=is&k=20&c=5ZRLITJjvwm0aEV6ynpdnJrjDmlraH-PD9mleSts6sQ="
    },
    {
      title: "Classic Margherita Pizza",
      description: "A simple yet delicious pizza with tomatoes, mozzarella cheese, and fresh basil.",
      ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Fresh Basil", "Olive Oil"],
      instructions: "Roll out dough, apply sauce, add cheese and basil. Bake in a preheated oven until crust is golden.",
      image: "https://bellyfull.net/wp-content/uploads/2016/03/Classic-Margherita-Pizza-blog-2.jpg"
    },
    {
      title: "Chicken Caesar Salad",
      description: "A fresh, creamy, and classic Caesar salad with grilled chicken.",
      ingredients: ["Romaine lettuce", "Grilled chicken breast", "Caesar dressing", "Croutons", "Parmesan cheese"],
      instructions: "Chop lettuce and slice grilled chicken. Toss lettuce, chicken, croutons, and Parmesan cheese with Caesar dressing. Serve chilled.",
      image: "https://s23209.pcdn.co/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051.jpg"
    },
    {
      title: "Vegetable Stir-Fry",
      description: "A healthy and colorful vegetable stir-fry with a flavorful sauce.",
      ingredients: ["Mixed vegetables (bell peppers, broccoli, carrots, snap peas)", "Soy sauce", "Garlic", "Ginger", "Olive oil"],
      instructions: "Heat olive oil in a pan over medium heat. Add minced garlic and ginger, sauté for a minute. Add vegetables and stir-fry until tender. Add soy sauce and stir to coat. Serve hot.",
      image: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg"
    },
    {
      title: "Classic Beef Tacos",
      description: "Tasty and easy-to-make beef tacos with fresh toppings.",
      ingredients: ["Ground beef", "Taco seasoning", "Tortillas", "Shredded lettuce", "Diced tomatoes","Shredded cheese","Sour cream"],
      instructions: "Cook ground beef with taco seasoning. Warm tortillas as per package instructions. Assemble tacos with beef, lettuce, tomatoes, cheese, and a dollop of sour cream.",
      image: "https://brandsitesplatform-res.cloudinary.com/image/fetch/w_1040,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Foldelpaso%2Foldelpaso-us%2Frecipes%2Fqtcu578og0gukdk_kb_rmg_gmi_hi_res_jpeg.jpeg%3F"
    },
    {
      title: "Lemon Garlic Shrimp Pasta",
      description: "A light and zesty pasta dish with succulent shrimp.",
      ingredients: ["Pasta", "Shrimp, peeled and deveined", "Lemon juice", "Garlic", "Olive oil","Parsley"],
      instructions: "Cook pasta as per package instructions. Sauté garlic in olive oil, add shrimp, and cook until pink. Add lemon juice to shrimp and heat through. Toss cooked pasta with shrimp and garnish with parsley.",
      image: "https://pinchandswirl.com/wp-content/uploads/2020/06/Lemon-Garlic-Shrimp-Pasta.jpg"
    },
    {
      title: "Grilled Cheese Sandwich",
      description: "A classic, gooey grilled cheese sandwich.",
      ingredients: ["2 slices of bread", "2 slices of cheddar cheese", "Butter"],
      instructions: "Butter one side of each bread slice. Place cheese slices between the bread (buttered sides out). Heat a pan over medium heat. Cook the sandwich until golden brown on each side and the cheese is melted.",
      image: "https://www.allrecipes.com/thmb/ICeU6n3kGzoTxOV4ONB0q_TpgYk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/125434-GrilledCheeseoftheGods-mfs-3x2-067-267097af4d0b446ab646bba044445147.jpg"
    },
  ];

  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Row>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {recipes.map((recipe, index) => (
            <Card key={index} style={{ width: '15rem', margin: '10px', backgroundColor: 'black', border: '1px solid white' }}>
              <Card.Img variant="top" src={recipe.image} alt={recipe.title} style={{ width: '200px', height: '200px', marginBottom: '10px' }} />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'white' }}>{recipe.title}</Card.Title>
                <Button 
                  style={{ padding: '6px 10px', fontSize: '1.0rem', marginBottom: '10px', backgroundColor: 'white', color: 'black' }}
                  variant="primary" 
                  onClick={() => handleShowModal(recipe)}>
                  Details
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Row>
      <Row>
        {selectedRecipe && (
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header>
              <Modal.Title>
                <h2>{selectedRecipe.title}</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Col className="equal-width">
                  <div className="recipe-details">
                    <p>{selectedRecipe.description}</p>
                    <h3>Ingredients:</h3>
                    <ul>
                      {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                    <h3>Instructions:</h3>
                    <p>{selectedRecipe.instructions}</p>
                  </div>
                </Col>
                <Col className="equal-width">
                  <Card.Img variant="top" src={selectedRecipe.image} alt={selectedRecipe.title} style={{ width: '200px', height: '200px', marginBottom: '10px' }} />
                </Col>
            </Modal.Body>
            <Modal.Footer>
              <Button
                style={{ padding: '6px 10px', fontSize: '1.0rem', marginBottom: '10px', backgroundColor: 'black', color: 'white' }} 
                variant="secondary"
                onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Row>
    </Container>
  );
};

export default RecipeList;