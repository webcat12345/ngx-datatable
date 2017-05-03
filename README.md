# ngx-table [![npm version](https://badge.fury.io/js/ngx-datatable.svg)](http://badge.fury.io/js/ngx-datatable)
Simple table extension with sorting, filtering, paging... for Angular apps

[![Build Status](https://travis-ci.org/webcat12345/ngx-datatable.svg?branch=master)](https://travis-ci.org/webcat12345/ngx-datatable)
[![Code Climate](https://codeclimate.com/github/webcat12345/ngx-datatable/badges/gpa.svg)](https://codeclimate.com/github/webcat12345/ngx-datatable)
[![Dependency Status](https://david-dm.org/webcat12345/ngx-datatable.svg)](https://david-dm.org/webcat12345/ngx-datatable)
[![devDependency Status](https://david-dm.org/webcat12345/ngx-datatable/dev-status.svg)](https://david-dm.org/webcat12345/ngx-datatable#info=devDependencies)
[![Throughput Graph](https://graphs.waffle.io/webcat12345/ngx-datatable/throughput.svg)](https://waffle.io/webcat12345/ngx-datatable/metrics)

# Usage & Demo
[http://valor-software.github.io/ng2-table/](http://valor-software.github.io/ng2-table/)


- - -

## Installation

1. A recommended way to install ***ngx-datatable*** is through [npm](https://www.npmjs.com/search?q=ngx-datatable) package manager using the following command:

  ```bash
  npm i ngx-datatable --save
  ```

  Alternatively, you can [download it in a ZIP file](https://github.com/webcat12345/ngx-datatable/archive/master.zip).

2. More information regarding using of ***ngx-table*** is located in
  [demo](http://valor-software.github.io/ng2-table/) and [demo sources](https://github.com/webcat12345/ngx-datatable/tree/master/demo).

## Documentation

### Inputs (Properties)

- `page` (`number`) - the default page after the table component loading
- `itemsPerPage` (`number`) - number of the displaying items (rows) on a page
- `maxSize` (`number`) - number of the displaying pages before `...`
- `numPages` (`number`) - total number of the pages
- `length` (`number`) - total number of the items after filtering (of it's chosen)

- `config` (`?any`) - config for setup all plugins (filtering, sorting, paging):
  - `paging` (`?boolean`) - - switch on the paging plugin
  - `sorting` (`?any`) - switch on the sorting plugin
    - `columns` (`Array<any>`) - only list of the columns for sorting
  - `filtering` (`?any`) - switch on the filtering plugin
    - `filterString` (`string`) - the default value for filter
    - `columnName` (`string`) - the property name in raw data
  - `className` (`string|Array<string>`) - additional CSS classes that should be added to a <table>

- `rows` (`?Array<any>`) - only list of the rows which should be displayed
- `columns` (`?Array<any>`) - config for columns (+ sorting settings if it's needed)
    - `title` (`string`) - the title of column header
    - `name` (`string`) - the property name in data
    - `sort` (`?string|boolean`) - config for columns (+ sorting settings if it's needed), sorting is switched on by default for each column
    - `className` (`string|Array<string>`) - additional CSS classes that should be added to a column header
    - `filtering` (`?any`) - switch on the filtering plugin
      - `filterString` (`string`) - the default value for filter
      - `columnName` (`string`) - the property name in raw data

### Outputs (Events)

- `tableChanged`: data change event handler
- `cellClicked`: onclick event handler

### Filter

The responsibility of the filtering issue falls on user. You should choose on which columns the filter would be applied. You could add any number of different filters.
Filter string - it's a string for matching values in raw data. Column name refers to the property name in raw data. The rest logic you could organize by yourself (the order of filters, data formats, etc). Even you could use filter for list of data columns.

You can also set up `filtering` param for columns, in this case filter box will appear in first row of the table.

### Sorting

Data sorting could be in 3 modes: asc, desc and without sorting data (as it comes from backend or somewhere else). If you want to switch off the sorting for some of the columns then you should set it forcibly in columns config (set property sort to false value for each column you want)

### Paging

Pagination could be used from [ng2-bootstrap](https://github.com/valor-software/ng2-bootstrap) - [pagination component](http://valor-software.github.io/ng2-bootstrap/#pagination). When the page is changed, the pagination component will emit event `change-table` with an object {page, itemsPerPage}. Then you can easily subscribe on it and request corresponding raw data.


## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/webcat12345/ngx-datatable/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License
