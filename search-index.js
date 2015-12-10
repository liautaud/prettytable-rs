var searchIndex = {};
searchIndex['main'] = {"items":[],"paths":[]};
searchIndex['prettytable'] = {"items":[[0,"","prettytable","A formatted and aligned table printer written in rust",null,null],[3,"Table","","A Struct representing a printable table",null,null],[3,"ColumnIter","","Iterator over immutable cells in a column",null,null],[3,"ColumnIterMut","","Iterator over mutable cells in a column",null,null],[0,"cell","","This module contains definition of table/row cells stuff",null,null],[3,"Cell","prettytable::cell","Represent a table cell containing a string.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"cell"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"cell"}],"output":{"name":"cell"}}],[11,"new_align","","Create a new `Cell` initialized with content from `string`.\nText alignment in cell is configurable with the `align` argument",0,{"inputs":[{"name":"cell"},{"name":"str"},{"name":"align"}],"output":{"name":"cell"}}],[11,"new","","Create a new `Cell` initialized with content from `string`.\nBy default, content is align to `LEFT`",0,{"inputs":[{"name":"cell"},{"name":"str"}],"output":{"name":"cell"}}],[11,"align","","Set text alignment in the cell",0,{"inputs":[{"name":"cell"},{"name":"align"}],"output":null}],[11,"style","","Add a style attribute to the cell",0,{"inputs":[{"name":"cell"},{"name":"attr"}],"output":null}],[11,"with_style","","Add a style attribute to the cell. Can be chained",0,{"inputs":[{"name":"cell"},{"name":"attr"}],"output":{"name":"cell"}}],[11,"reset_style","","Remove all style attributes and reset alignment to default (LEFT)",0,{"inputs":[{"name":"cell"}],"output":null}],[11,"style_spec","","Set the cell's style by applying the given specifier string",0,{"inputs":[{"name":"cell"},{"name":"str"}],"output":{"name":"cell"}}],[11,"get_height","","Return the height of the cell",0,{"inputs":[{"name":"cell"}],"output":{"name":"usize"}}],[11,"get_width","","Return the width of the cell",0,{"inputs":[{"name":"cell"}],"output":{"name":"usize"}}],[11,"get_content","","Return a copy of the full string contained in the cell",0,{"inputs":[{"name":"cell"}],"output":{"name":"string"}}],[11,"print","","Print a partial cell to `out`. Since the cell may be multi-lined,\n`idx` is the line index to print. `col_width` is the column width used to\nfill the cells with blanks so it fits in the table.\nIf `ìdx` is higher than this cell's height, it will print empty content",0,{"inputs":[{"name":"cell"},{"name":"t"},{"name":"usize"},{"name":"usize"}],"output":{"name":"result"}}],[11,"print_term","","Apply style then call `print` to print the cell into a terminal",0,{"inputs":[{"name":"cell"},{"name":"t"},{"name":"usize"},{"name":"usize"}],"output":{"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"cell"},{"name":"t"}],"output":{"name":"cell"}}],[11,"to_string","","",0,{"inputs":[{"name":"cell"}],"output":{"name":"string"}}],[11,"default","","Return a cell initialized with a single empty `String`, with LEFT alignment",0,{"inputs":[{"name":"cell"}],"output":{"name":"cell"}}],[0,"row","prettytable","This module contains definition of table rows stuff",null,null],[3,"Row","prettytable::row","Represent a table row made of cells",null,null],[11,"fmt","","",1,{"inputs":[{"name":"row"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"row"}],"output":{"name":"row"}}],[11,"new","","Create a new `Row` backed with `cells` vector",1,{"inputs":[{"name":"row"},{"name":"vec"}],"output":{"name":"row"}}],[11,"empty","","Create an row of length `size`, with empty strings stored",1,{"inputs":[{"name":"row"}],"output":{"name":"row"}}],[11,"len","","Get the number of cells in this row",1,{"inputs":[{"name":"row"}],"output":{"name":"usize"}}],[11,"get_height","","Get the height of this row",1,{"inputs":[{"name":"row"}],"output":{"name":"usize"}}],[11,"get_cell_width","","Get the minimum width required by the cell in the column `column`.\nReturn 0 if the cell does not exist in this row",1,{"inputs":[{"name":"row"},{"name":"usize"}],"output":{"name":"usize"}}],[11,"get_cell","","Get the cell at index `idx`",1,{"inputs":[{"name":"row"},{"name":"usize"}],"output":{"name":"option"}}],[11,"get_mut_cell","","Get the mutable cell at index `idx`",1,{"inputs":[{"name":"row"},{"name":"usize"}],"output":{"name":"option"}}],[11,"set_cell","","Set the `cell` in the row at the given `column`",1,{"inputs":[{"name":"row"},{"name":"cell"},{"name":"usize"}],"output":{"name":"result"}}],[11,"add_cell","","Append a `cell` at the end of the row",1,{"inputs":[{"name":"row"},{"name":"cell"}],"output":null}],[11,"insert_cell","","Insert `cell` at position `index`. If `index` is higher than the row lenght,\nthe cell will be appended at the end",1,{"inputs":[{"name":"row"},{"name":"usize"},{"name":"cell"}],"output":null}],[11,"remove_cell","","Remove the cell at position `index`. Silently skip if this cell does not exist",1,{"inputs":[{"name":"row"},{"name":"usize"}],"output":null}],[11,"print","","Print the row to `out`, with `separator` as column separator, and `col_width`\nspecifying the width of each columns",1,null],[11,"print_term","","Print the row to terminal `out`, with `separator` as column separator, and `col_width`\nspecifying the width of each columns. Apply style when needed",1,null],[11,"default","","",1,{"inputs":[{"name":"row"}],"output":{"name":"row"}}],[11,"index","","",1,{"inputs":[{"name":"row"},{"name":"usize"}],"output":{"name":"output"}}],[11,"index_mut","","",1,{"inputs":[{"name":"row"},{"name":"usize"}],"output":{"name":"output"}}],[11,"from_iter","","",1,{"inputs":[{"name":"row"},{"name":"t"}],"output":{"name":"row"}}],[11,"from","","",1,{"inputs":[{"name":"row"},{"name":"t"}],"output":{"name":"row"}}],[0,"format","prettytable","Define table formatting utilities",null,null],[3,"LineSeparator","prettytable::format","Contains the character used for printing a line separator",null,null],[3,"TableFormat","","Contains the table formatting rules",null,null],[4,"Align","","Alignment for cell's content",null,null],[13,"LEFT","","",2,null],[13,"CENTER","","",2,null],[13,"RIGHT","","",2,null],[17,"MINUS_PLUS_SEP","","A line separator mad of `-` and `+`",null,null],[17,"EQU_PLUS_SEP","","A line separator mad of `=` and `+`",null,null],[17,"FORMAT_DEFAULT","","Default table format, printing a table like this :",null,null],[17,"FORMAT_NO_TITLE","","Similar to `FORMAT_DEFAULT` but without special separator after title line",null,null],[17,"FORMAT_NO_LINESEP_WITH_TITLE","","With no line separator, but with title separator",null,null],[17,"FORMAT_NO_LINESEP","","With no line or title separator",null,null],[17,"FORMAT_NO_COLSEP","","No column seprarator",null,null],[17,"FORMAT_NO_BORDER","","Format for printing a table without any separators (only alignment)",null,null],[11,"eq","","",2,{"inputs":[{"name":"align"},{"name":"align"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"align"},{"name":"align"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"align"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"align"}],"output":{"name":"align"}}],[11,"fmt","","",3,{"inputs":[{"name":"lineseparator"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"lineseparator"}],"output":{"name":"lineseparator"}}],[11,"new","","Create a new line separator instance where `line` is the character used to separate 2 lines\nand `cross` is the one used when column separaors and line separators cross",3,{"inputs":[{"name":"lineseparator"},{"name":"char"},{"name":"char"}],"output":{"name":"lineseparator"}}],[11,"print","","Print a full line separator to `out`. `col_width` is a slice containing the width of each column",3,null],[11,"fmt","","",4,{"inputs":[{"name":"tableformat"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"tableformat"}],"output":{"name":"tableformat"}}],[11,"new","","Create a new TableFormat.",4,{"inputs":[{"name":"tableformat"},{"name":"option"},{"name":"option"},{"name":"option"}],"output":{"name":"tableformat"}}],[11,"print_line_separator","","Print a full line separator to `out`. `col_width` is a slice containing the width of each column",4,null],[11,"print_title_separator","","Print a full title separator to `out`. `col_width` is a slice containing the width of each column",4,null],[11,"print_column_separator","","Print a column separator to `out`",4,{"inputs":[{"name":"tableformat"},{"name":"t"}],"output":{"name":"result"}}],[11,"fmt","prettytable","",5,{"inputs":[{"name":"table"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"table"}],"output":{"name":"table"}}],[11,"new","","Create an empty table",5,{"inputs":[{"name":"table"}],"output":{"name":"table"}}],[11,"init","","Create a table initialized with `rows`",5,{"inputs":[{"name":"table"},{"name":"vec"}],"output":{"name":"table"}}],[11,"set_format","","Change separators the table format",5,{"inputs":[{"name":"table"},{"name":"tableformat"}],"output":null}],[11,"get_column_num","","Compute and return the number of column",5,{"inputs":[{"name":"table"}],"output":{"name":"usize"}}],[11,"len","","Get the number of rows",5,{"inputs":[{"name":"table"}],"output":{"name":"usize"}}],[11,"set_titles","","Set the optional title lines",5,{"inputs":[{"name":"table"},{"name":"row"}],"output":null}],[11,"unset_titles","","Unset the title line",5,{"inputs":[{"name":"table"}],"output":null}],[11,"get_mut_row","","Get a mutable reference to a row",5,{"inputs":[{"name":"table"},{"name":"usize"}],"output":{"name":"option"}}],[11,"get_row","","Get an immutable reference to a row",5,{"inputs":[{"name":"table"},{"name":"usize"}],"output":{"name":"option"}}],[11,"add_row","","Append a row in the table, transferring ownership of this row to the table\nand returning a mutable reference to the row",5,{"inputs":[{"name":"table"},{"name":"row"}],"output":{"name":"row"}}],[11,"add_empty_row","","Append an empty row in the table. Return a mutable reference to this new row.",5,{"inputs":[{"name":"table"}],"output":{"name":"row"}}],[11,"insert_row","","Insert `row` at the position `index`, and return a mutable reference to this row.\nIf index is higher than current numbers of rows, `row` is appended at the end of the table",5,{"inputs":[{"name":"table"},{"name":"usize"},{"name":"row"}],"output":{"name":"row"}}],[11,"set_element","","Modify a single element in the table",5,{"inputs":[{"name":"table"},{"name":"str"},{"name":"usize"},{"name":"usize"}],"output":{"name":"result"}}],[11,"remove_row","","Remove the row at position `index`. Silently skip if the row does not exist",5,{"inputs":[{"name":"table"},{"name":"usize"}],"output":null}],[11,"get_column_width","","Get the width of the column at position `col_idx`.\nReturn 0 if the column does not exists;",5,{"inputs":[{"name":"table"},{"name":"usize"}],"output":{"name":"usize"}}],[11,"get_all_column_width","","Get the width of all columns, and return a slice\nwith the result for each column",5,{"inputs":[{"name":"table"}],"output":{"name":"vec"}}],[11,"column_iter","","Return an iterator over the immutable cells of the column specified by `column`",5,{"inputs":[{"name":"table"},{"name":"usize"}],"output":{"name":"columniter"}}],[11,"column_iter_mut","","Return an iterator over the mutable cells of the column specified by `column`",5,{"inputs":[{"name":"table"},{"name":"usize"}],"output":{"name":"columnitermut"}}],[11,"print","","Print the table to `out`",5,{"inputs":[{"name":"table"},{"name":"t"}],"output":{"name":"result"}}],[11,"print_term","","Print the table to terminal `out`, applying styles when needed",5,{"inputs":[{"name":"table"},{"name":"t"}],"output":{"name":"result"}}],[11,"printstd","","Print the table to standard output\n# Panic\nPanic if writing to standard output fails",5,{"inputs":[{"name":"table"}],"output":null}],[11,"index","","",5,{"inputs":[{"name":"table"},{"name":"usize"}],"output":{"name":"output"}}],[11,"index_mut","","",5,{"inputs":[{"name":"table"},{"name":"usize"}],"output":{"name":"output"}}],[11,"fmt","","",5,{"inputs":[{"name":"table"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_iter","","",5,{"inputs":[{"name":"table"},{"name":"t"}],"output":{"name":"table"}}],[11,"from","","",5,{"inputs":[{"name":"table"},{"name":"t"}],"output":{"name":"table"}}],[11,"next","","",6,{"inputs":[{"name":"columniter"}],"output":{"name":"option"}}],[11,"next","","",7,{"inputs":[{"name":"columnitermut"}],"output":{"name":"option"}}],[14,"cell!","","This macro simplifies `Cell` creation",null,null],[14,"row!","","This macro simplifies `Row` creation",null,null],[14,"table!","","Create a table filled with some values",null,null],[14,"ptable!","","Create a table with `table!` macro, print it to standard output, then return this table for future usage.",null,null]],"paths":[[3,"Cell"],[3,"Row"],[4,"Align"],[3,"LineSeparator"],[3,"TableFormat"],[3,"Table"],[3,"ColumnIter"],[3,"ColumnIterMut"]]};
initSearch(searchIndex);
