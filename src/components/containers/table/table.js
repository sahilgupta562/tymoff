import React, { PureComponent, Fragment } from "react";
import { uniq, indexOf } from "lodash";
import { AutoSizer } from "react-virtualized";
import { Checkbox, Button } from "@material-ui/core";
import { Note, Flag } from "@material-ui/icons";
import MuiTable from "mui-virtualized-table";
import { ModalType, ActionType } from "../../../constant";
import "./table.scss";

export default class Table extends PureComponent {
  state = { selectedRowIds: [] };
  select = ids => {
    this.setState(state => ({
      selectedRowIds: uniq([...state.selectedRowIds, ...ids])
    }));
  };

  unselect = ids => {
    this.setState(state => ({
      selectedRowIds: state.selectedRowIds.filter(id => !ids.includes(id))
    }));
  };

  resetSelection = () => {
    this.setState(state => ({
      selectedRowIds: state.selectedRowIds.filter(id => false)
    }));
  };

  onClickMenu = (rowData, e) => {
    const { setFileContextMenuPosition, openModal, setActionType, setSelectedFiles } = this.props;
    const { selectedRowIds } = this.state;
    e.preventDefault();
    e.stopPropagation();
    setFileContextMenuPosition({ mouseX: e.clientX - 2, mouseY: e.clientY - 4 });
    !!selectedRowIds.length ? setSelectedFiles(selectedRowIds) : setSelectedFiles([rowData.Name]);
    setActionType(ActionType.FILE);
    openModal(ModalType.FILE_CONTEXT_MENU);
  };

  columns = () => {
    const { columns, data } = this.props;
    const { selectedRowIds } = this.state;
    const fixedColumns = ["Labels", "Name", "Note", "Flag", "type"];
    let customColumns = [];
    customColumns.push({
      name: "checkbox",
      header: (
        <Checkbox
          checked={!!selectedRowIds.length}
          onChange={e => {
            if (selectedRowIds.length === data.length) {
              this.resetSelection();
              return;
            }

            this.select(data.map(d => d.Name));
          }}
          indeterminate={!!selectedRowIds.length && selectedRowIds.length !== data.length}
          color={!!selectedRowIds.length && selectedRowIds.length !== data.length ? "default" : "primary"}
        />
      ),
      cell: rowData => <Checkbox checked={selectedRowIds.some(name => rowData.Name === name)} disabled={typeof rowData.Name === "undefined"} />,
      cellProps: {
        style: { paddingRight: 0, paddingLeft: 0 }
        // className: css.cell
      },
      width: "3.5%"
    });
    customColumns.push({
      name: "Name",
      header: "Name",
      cell: rowData => {
        const nameArray = rowData.Name.toString().split("/");
        const file = nameArray.pop();
        const filename = file.replace(/\.[^.]*$/, "");
        return filename;
      },
      cellProps: {
        style: { paddingRight: 0, paddingLeft: 0 }
      },
      width: "15%"
    });
    for (let index = 0; index < columns.length; index++) {
      const column = columns[index];
      const header = column.charAt(0).toUpperCase() + column.slice(1);
      if (indexOf(fixedColumns, column) === -1) {
        customColumns.push({
          name: column,
          header: header,
          cellProps: {
            style: { paddingRight: 0, paddingLeft: 0 }
          },
          width: "15%"
        });
      }
    }
    customColumns.push({
      name: "Labels",
      header: "Labels",
      cell: rowData => {
        let value = rowData.Labels.replace(/[,\s]+|[,\s]+/g, " ").trim();
        const labels = value.split(" ");
        const lableCount = labels.length > 1 ? `+${labels.length - 1}` : "";
        return <Button variant="contained">{labels[0] ? `${labels[0]} ${lableCount}` : "N/A"}</Button>;
      },
      cellProps: {
        style: { paddingRight: 0, paddingLeft: 0 }
      },
      width: "10%"
    });
    customColumns.push({
      name: "Note",
      header: "Note",
      cell: rowData => {
        const note = rowData.Note;
        return <Note />;
      },
      cellProps: {
        style: { paddingRight: 0, paddingLeft: 0 }
      },
      width: "5%"
    });
    customColumns.push({
      name: "Flag",
      header: "Flag",
      cell: rowData => {
        const flag = rowData.Flag;
        return <Flag />;
      },
      cellProps: {
        style: { paddingRight: 0, paddingLeft: 0 }
      },
      width: "5%"
    });
    return customColumns;
  };

  render() {
    const { data } = this.props;
    const { selectedRowIds } = this.state;
    return (
      <Fragment>
        <AutoSizer>
          {({ width, height }) => (
            <MuiTable
              data={data}
              columns={this.columns()}
              includeHeaders
              fixedRowCount={1}
              width={width}
              height={height}
              rowHeight={35}
              onCellContextMenu={(event, { column, rowData }) => this.onClickMenu(rowData, event)}
              onCellClick={(event, { column, rowData }) => {
                if (selectedRowIds.some(name => rowData.Name === name)) {
                  this.unselect([rowData.Name]);
                  return;
                }
                this.select([rowData.Name]);
              }}
            />
          )}
        </AutoSizer>
      </Fragment>
    );
  }
}
