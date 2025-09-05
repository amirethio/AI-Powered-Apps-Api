

### Ml VS AI ENGINNER

**Machine Learning (ML) Engineer**: train build and deploy the model.
**AI Engineer**:
Acadamic way: more broader than ml
Industrial way : integrating with prebuild models 

 ### LLM ( LARGE LANGUAGE MODELS )

 **Model** : model is a system which learn sfrom data so it can predict.


**(LLM) LARGE LANGUAGE MODEL**: big and complex model tained on massive data which can generte human like language.

### TOKEN :
- a piece of text or space or emogy that the ai model can read and undertand 
- A token is the smallest piece of text that a model can process at a time.

### CONTEXT WINDOW :  
 - maximum number of token that a model can cosider at a single time of  generating text 

## WAYS OF CONTROLLING RANDOMNESS 

### TEMPRATURE: 0-2
- how creative (random)  the model is 
  
1. LOW TEMPRATURE 0.2 -0.4 : focused and give safe answer (for factual things )
2. MIDDLE TEMPRATURE 0.7 :  slightly creative model 
3. HIGH TEMPRATURE 1 : so creative and random and might give imaginery also wrong output

### TOP-P(nuclus sampling)
-determine which of the next tokens should be considered
**CASES**
1. Top-p = 1 → considers all tokens (more randomness).
2. Top-p = 0.1 → very restrictive, almost deterministic.

=> mostly chnageing either top-p or temprature is enough

### Streaming
- a   process of which ai model gives it output one by one (one by one output like speaking)