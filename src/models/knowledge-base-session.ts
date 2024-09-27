/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Data Provider
 * Документация API Провайдера Данных
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

 /**
 * Knowledge Base
 *
 * @export
 * @interface KnowledgeBaseSession
 */
export interface KnowledgeBaseSession {

    /**
     * Knowledge Base identifier
     *
     * @type {string}
     * @memberof KnowledgeBaseSession
     * @example d62fad7a-2d00-456b-b711-67dfbfd4f07f
     */
    knowledgeBaseId: string;

    /**
     * Session start time
     *
     * @type {Date}
     * @memberof KnowledgeBaseSession
     * @example 2024-09-01T08:30Z
     */
    startAt: Date;

    /**
     * Session end time
     *
     * @type {Date}
     * @memberof KnowledgeBaseSession
     * @example 2024-09-01T12:30Z
     */
    endAt: Date;
}
