class BankBranch {
    constructor(branchInfo) {
        // Check if an instance already exists
        if (!BankBranch.bankBranchInstance) {
            // If not, set the current instance as the singleton instance
            BankBranch.bankBranchInstance = this;
            // Set the branchInfo property for this instance
            this.branchInfo = branchInfo;
        }
        // Return the singleton instance
        return BankBranch.bankBranchInstance;
    }

    getBranchInfo() {
        // Return the branchInfo of the singleton instance
        return this.branchInfo;
    }
}

// Usage
const branchA = new BankBranch("Branch A Info");
const branchB = new BankBranch("Branch B Info");

console.log(branchA === branchB); // true, since both variables refer to the same instance

console.log(branchA.getBranchInfo()); // "Branch A Info"
console.log(branchB.getBranchInfo()); // "Branch A Info" (same as branchA)

