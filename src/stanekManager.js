/** @param {NS} ns **/

export async function main(ns) {
	while(true){
		const fragments = ns.stanek.activeFragments();
		const minCharged = fragments.sort((a,b) => a.numCharge - b.numCharge)[0];
		await ns.stanek.charge(minCharged.x, minCharged.y);
	}
}