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
 *           type: integer
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
 *     UpdateCoffee:
 *       type: object
 *       required:
 *         - id
 *         - data
 *       properties:
 *         id:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: String with the MongoDB _id
 *         data:
 *           type: object
 *           properties:
 *             brand: 
 *               type: string
 *               description: The name of the coffee brand
 *             price:
 *               type: integer
 *               description: The price of the coffee
 *             img_url:
 *               type: string
 *               description: Url address of coffee's image
 *             available:
 *               type: boolean
 *               description: Wether that coffee is available or not
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The API of coffee products
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns a list with all coffee products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response: 
 *                   type: integer
 *                   description: Response code
 *                   example: 200
 *                 message:
 *                   type: array
 *                   description: List of coffees
 *                   items:
 *                     $ref: '#/components/schemas/Coffee'
 *               
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
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response: 
 *                   type: integer
 *                   description: Response code
 *                   example: 200
 *                 products:
 *                   description: The requested coffee 
 *                   $ref: '#/components/schemas/Coffee'
 */

 /**
 * @swagger
 * /populate:
 *   get:
 *     summary: Restores original database documents
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response: 
 *                   type: integer
 *                   description: Response code
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: Success message
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
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response: 
 *                   type: integer
 *                   description: Response code
 *                   example: 201
 *                 products:
 *                   description: The created coffee
 *                   $ref: '#/components/schemas/Coffee'
 */

/**
 * @swagger
 * /update:
 *   put:
 *     summary: Updates a coffee
 *     tags: [Products]
 *     requestBody:
 *       description: Brand, price, img url and availability of the new product
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/UpdateCoffee'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response: 
 *                   type: integer
 *                   description: Response code
 *                   example: 200
 *                 products:
 *                   description: The updated coffee
 *                   $ref: '#/components/schemas/Coffee'
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
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response: 
 *                   type: integer
 *                   description: Response code
 *                   example: 200
 *                 products:
 *                   description: The created coffee
 *                   $ref: '#/components/schemas/Coffee'
 */