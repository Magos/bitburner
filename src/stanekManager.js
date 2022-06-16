/** @param {NS} ns **/
let startTime = new Date();
let now = new Date();
export async function main(ns) {
	while(now - startTime < 3600000){ ///Run for 1 hour at a time.
		const fragments = ns.stanek.activeFragments().filter(f => f.id < 100);
		const minCharged = fragments.sort((a,b) => a.numCharge - b.numCharge)[0];
		await ns.stanek.chargeFragment(minCharged.x, minCharged.y);
		now = new Date();
	}
}