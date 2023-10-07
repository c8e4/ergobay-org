export const SellForErg = `
SELF.R4[SigmaProp].get || 
sigmaProp({       
    val fee  	= (SELF.R5[Long].get.toBigInt * (1000L).toBigInt) / (100000L).toBigInt
    val feePaid	= (fee == 0) || (OUTPUTS(1).value >= fee && OUTPUTS(1).propositionBytes == SELF.R6[SigmaProp].get.propBytes)
    
    feePaid && 
    OUTPUTS(0).value               >=  SELF.R5[Long].get - fee  &&
    OUTPUTS(0).propositionBytes    ==  SELF.R4[SigmaProp].get.propBytes &&
    OUTPUTS(0).R4[Coll[Byte]].get  ==  SELF.id
})`