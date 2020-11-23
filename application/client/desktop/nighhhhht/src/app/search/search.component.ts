import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SearchService } from './search.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

school = {
   name: '',
   email: ''
};
columnDefs = [
{headerName: 'name', field: 'name'},
{headerName: 'email', field: 'email'}];
gridApi: any;
gridColumnApi: any;
rowSelection = 'single';
defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
paginationPageSize = 10;
rowData: any = [];

  constructor(
private router: Router,
private searchService: SearchService
  ) { }

  ngOnInit() {
    
  }

GpRoute(queryId) {
this.router.navigate(['/upadet'], { queryParams: { 'id': queryId } });
}
onSelectionChanged(event) {
  const selectedRows = this.gridApi.getSelectedRows();
  this.GpRoute(selectedRows[0]._id);
}
onGridReady(params) {
this.gridApi = params.api;
this.gridApi.sizeColumnsToFit();
this.gridColumnApi = params.columnApi;
}
GpSearch() {
 this.searchService.GpSearch(this.school)
  .subscribe(
    data => {
       console.log('data searched successfully --- ', data);
       this.rowData = data;
    },
    error => {
       console.log('cannot able to search the data --- ', error);
    }
    );
}

}