/**
 * @swagger
 * components:
 *   schemas:
 *     Coffee:
 *       type: object
 *       required:
 *         - brand
 *         - price
 *         - img_url
 *         - available
 *       properties:
 *         brand: 
 *           type: string
 *           description: The name of the coffee brand
 *         price:
 *           type: string
 *           description: The price of the coffee
 *         img_url:
 *           type: string
 *           description: Url address of coffee's image
 *         available:
 *           type: boolean
 *           description: Wether that coffee is available or not
 *     Id:
 *       type: object
 *       required:
 *         - _id
 *       properties:
 *         _id:
 *           type: string
 *           description: String with the MongoDB _id
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The API for coffee products
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns a list with all coffee products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A list of all coffee products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Coffee'
 */

/**
 * @swagger
 * /coffee/{brand}:
 *   get:
 *     summary: Returns the specified product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: brand
 *         schema:
 *           type: string
 *         required: true
 *         description: Coffee brand
 *     responses:
 *       200:
 *         description: The coffee chosen by brand name
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Coffee'
 */

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Creates a new coffee product
 *     tags: [Products]
 *     requestBody:
 *       description: Brand, price, img url and availability of the new product
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/Coffee'
 *     responses:
 *       201:
 *         description: Creates a new coffee product with the parameters provided by the user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Coffee'
 */

 /**
 * @swagger
 * /delete:
 *   delete:
 *     summary: Deletes a coffee
 *     tags: [Products]
 *     requestBody:
 *       description: The id of the coffee to be deleted
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/Id'
 *     responses:
 *       200:
 *         description: Creates a new coffee product with the parameters provided by the user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Coffee'
 */