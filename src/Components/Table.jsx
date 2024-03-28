import TableRow from './TableRow';
const Table = () => {
    return (
        <div className="overflow-x-auto mb-10">
            <table className="table">
                <tbody>
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                </tbody>
            </table>
        </div>
    );
};

export default Table;