export default interface IController{
    get() : Promise<void>,
    post() : Promise<void>,
    put() : Promise<void>,
    delete() : Promise<void>,
}