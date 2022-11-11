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
 *           type: string
 *           description: Wether that coffee is available or not
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