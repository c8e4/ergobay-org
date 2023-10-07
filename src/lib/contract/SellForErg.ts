export const SellForErg = `
{
    val priceNanoErg     	= SELF.R4[Long].get         // token sale price in nanoErg
    val sellerPK 			= SELF.R5[GroupElement].get // Public Key of the token seller
    val sellerAddress		= SELF.R6[Coll[Byte]].get   // seller receive address
    val feeAddress			= SELF.R7[Coll[Byte]].get   // ui Fee receive address

    val feeDenom 			= 100000L
    val devFee   			= 1000L
    val feeInNanoErg   		= (priceNanoErg.toBigInt * devFee.toBigInt) / feeDenom.toBigInt
    val onlyOneBoxSpent		= (OUTPUTS(0).R4[Coll[Byte]].get == SELF.id)
    val sellerHappy			= (OUTPUTS(0).value >= priceNanoErg - feeInNanoErg) && (OUTPUTS(0).propositionBytes == sellerAddress)
    val feePaid				= (feeInNanoErg == 0) ||
                              (OUTPUTS(1).value >= feeInNanoErg && OUTPUTS(1).propositionBytes == feeAddress)
    sigmaProp(onlyOneBoxSpent && sellerHappy && feePaid) || proveDlog(sellerPK)
}`