import React, { useState } from 'react';
const studentsData = [
{ name: 'Alice', marks: 85 },
{ name: 'Bob', marks: 72 },
{ name: 'Charlie', marks: 91 },
{ name: 'Daisy', marks: 65 },
{ name: 'Ethan', marks: 58 },
{ name: 'Fiona', marks: 79 },
{ name: 'George', marks: 88 },
];
export default function StudentsPagination() {
const perPage = 3;
const [page, setPage] = useState(1);
const totalPages = Math.ceil(studentsData.length / perPage);
const start = (page - 1) * perPage;
const visible = studentsData.slice(start, start + perPage);
return (
<div>
<ul>
{visible.map((s, idx) => (
<li key={start + idx}>{s.name} — {s.marks}</li>
))}
</ul>
<div style={{ marginTop: 8 }}>
<button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Previous</button>
<span style={{ margin: '0 8px' }}>{page} / {totalPages}</span>
<button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</button>
</div>
</div>
);
}