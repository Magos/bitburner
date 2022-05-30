/** @param {NS} ns **/

export async function main(ns) {
	while(true){
		const fragments = ns.stanek.activeFragments().filter(f => f.id < 100 && (f.numCharge > 0));
		const minCharged = fragments.sort((a,b) => a.numCharge - b.numCharge)[0];
		await ns.stanek.chargeFragment(minCharged.x, minCharged.y);
	}
}