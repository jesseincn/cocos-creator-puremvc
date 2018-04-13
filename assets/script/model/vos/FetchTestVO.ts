export class FetchTestVO {
    public value:number = 0;

    public constructor(){

    }

    public clone():FetchTestVO{
        let fetchTestVO:FetchTestVO = new FetchTestVO();
        fetchTestVO.value = this.value;
        return fetchTestVO;
    }
}