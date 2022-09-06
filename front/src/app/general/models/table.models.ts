export interface ColumnsTab {
  field: string;
  header: string;
  type?: string;
  filter?: boolean;
  width?: string;
}

export interface actionInterface {
  name: string;
  action: Function;
}

export interface Column {
  label: string;
  field: string;
  sorted?: boolean;
}
