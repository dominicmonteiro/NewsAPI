/**
 * @swagger
 *    /newsapi:
 *      get:
 *        tags:
 *          - Busca de notícias dos estados unidos
 *        summary: Busca notícias
 *        description: Retorna o as notícias pertinentes aos Estados Unidos com filtro por tecnologia.
 *        produces:
 *          - application/json
 *        responses:
 *          '200':
 *            description: Request válido e com notícias
 *            schema:
 *              $ref: '#/definitions/data'
 *          '400':
 *            description: Falha na busca por notícias
 *            schema:
 *              $ref: '#/definitions/ApiResponse'
 */

/**
 * @swagger
 *    /newsapi/{country}/{language}:
 *      get:
 *        tags:
 *          - Busca de notícias dos estados unidos
 *        summary: Busca notícias
 *        description: Retorna o as notícias pertinentes aos Estados Unidos com filtro por tecnologia.
 *        parameters:
 *          - name: country
 *            in: path
 *            description: 'Insira a sigla do país no modelo ISO 3166-1 alpha-2. Ex: us, br, pt e etc.'
 *            required: true
 *            type: string
 *          - name: language
 *            in: path
 *            description: 'Insira a sigla do idioma no modelo ISO 639‑1. Ex: en, pt e etc.'
 *            required: true
 *            type: string
 *        produces:
 *          - application/json
 *        responses:
 *          '200':
 *            description: Request válido e com notícias
 *            schema:
 *              $ref: '#/definitions/data'
 *          '400':
 *            description: Falha na busca por notícias
 *            schema:
 *              $ref: '#/definitions/ApiResponse'
 */

/**
 * @swagger
 *  definitions:
 *    ApiResponse:
 *      type: object
 *      required:
 *        - message
 *      properties:
 *        message:
 *          type: string
 *          description: Descrição do erro ocorrido
 *          example: Mensagem descrevendo o motivo do erro.
 *    data:
 *      type: array
 *      items:
 *       $ref: '#/definitions/news'
 *    news:
 *      type: object
 *      required:
 *       - id
 *       - name
 *       - description
 *       - url
 *       - category
 *       - language
 *       - country
 *      properties:
 *        id:
 *          type: string
 *          description: Identificador da notícia
 *          example: abc-news
 *        name:
 *          type: string
 *          description: Nome da notícia
 *          example: ABC News
 *        description:
 *          type: string
 *          description: Descrição da notícia
 *          example: Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.
 *        url:
 *          type: string
 *          description: URL da notícia
 *          example: https://abcnews.go.com
 *        category:
 *          type: string
 *          description: Categoria da notícia
 *          example: general
 *        language:
 *          type: string
 *          description: Idioma da notícia
 *          example: en
 *        country:
 *          type: string
 *          description: País da notícia
 *          example: us
 */
