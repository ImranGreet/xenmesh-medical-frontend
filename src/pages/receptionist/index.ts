import { ref, type Ref } from 'vue';

export default class appoinmentList {
	public tableLoader: Ref<boolean> = ref(true);
	setTableLoader(value: boolean): void {
		this.tableLoader.value = value;
	}

	getAppoinmentCount():void{
		
	}

}
