import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://gmmsahztdebjviekwsyz.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtbXNhaHp0ZGVianZpZWt3c3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg0NTc5NDAsImV4cCI6MjAxNDAzMzk0MH0.EXtUNhHzwo6nxL78oLmaWS3PzV2fToEaygGZ2BMUO84";
const supabase = createClient(supabaseUrl, supabaseKey);

let { data: Tanks, error } = await supabase.from("Tanks").select("*");
console.log(error);
console.log(Tanks);

let headRow = document.getElementById("headRow");
let body = document.getElementById("body");

const order = [
	"Product",
	"SG",
	"Al2O3",
	"Al",
	"Basicity",
	"AlumPercent",
	"FreeAcid",
	"pH",
	"Chloride",
	"Turbidity",
	"Updated",
];

function buildTd(text, element) {}

for (let tank of Tanks) {
	let tr = document.createElement("tr");
	let txt = tank.Name;
	const name = document.createElement("th");
	name.appendChild(document.createTextNode(txt));
	tr.appendChild(name);
	for (let column of order) {
		const td = document.createElement("td");
		txt = tank[column];
		if (txt == null) {
			txt = "  ";
		}
		td.appendChild(document.createTextNode(txt));
		tr.appendChild(td);
	}
	body.appendChild(tr);
}
