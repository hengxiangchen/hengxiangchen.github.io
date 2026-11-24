window.HENCY_BLOG_POSTS = [
    {
        "title": "One-Shot Imitation Learning",
        "date": "2026-11-22",
        "slug": "one-shot-imitation-learning",
        "tags": "",
        "summary": "",
        "markdown": "**文章标题：**One-Shot Imitation Learning\n**文章链接：**https://arxiv.org/pdf/1703.07326\n**研究问题：**\n![image](assets/blog_images/279.png)\n**整体框架：**\n![image](assets/blog_images/280.png)\n\n",
        "updatedAt": "2026-11-22T03:00:29.474Z"
    },
    {
        "title": "详解L1 loss和L2 loss",
        "date": "2026-11-22",
        "slug": "l1-loss-l2-loss",
        "tags": "",
        "summary": "",
        "markdown": "**L2 loss：**最优解是**均值**，所以可能会受离群值影响\n![image](assets/blog_images/281.png)\n**L1 loss：**最优解是**中值**，所以不太会受离群值影响\n![image](assets/blog_images/282.png)\n\n**MSE处处可导，而且梯度值也是动态变化的，能够快速的收敛**；而**MAE在0点处不可导，且其梯度保持不变**。对于很小的损失值其梯度也很大，在深度学习中，就需要使用变化的学习率，在损失值很小时降低学习率。\n**对离群（异常）值得处理上，MAE要明显好于MSE**：如果样本中存在离群点，MSE会给离群点更高的权重，这就会牺牲其他正常点数据的预测效果，最终降低整体的模型性能。\n![image](assets/blog_images/283.png)\n\n\n**应用**\n对于大多数CNN网络，我们一般是使用L2-loss而不是L1-loss，因为L2-loss的收敛速度要比L1-loss要快得多。\n\n对于边框预测回归问题，通常也可以选择平方损失函数（L2损失），但L2范数的缺点是当存在离群点（outliers)的时候，这些点会占loss的主要组成部分。比如说真实值为1，预测10次，有一次预测值为1000，其余次的预测值为1左右，显然loss值主要由1000决定。所以FastRCNN采用稍微缓和一点绝对损失函数（smooth L1损失），它是随着误差线性增长，而不是平方增长。\n\n\n\n",
        "updatedAt": "2026-11-24T08:30:30.431Z"
    },
    {
        "title": "INSTANT POLICY: IN-CONTEXT IMITATION LEARNING VIA GRAPH DIFFUSION",
        "date": "2026-11-16",
        "slug": "instant-policy",
        "tags": "in-context robot learning",
        "summary": "",
        "markdown": "**文章标题：**INSTANT POLICY: IN-CONTEXT IMITATION LEARNING VIA GRAPH DIFFUSION\n**文章链接：**https://arxiv.org/pdf/2411.12633\n",
        "updatedAt": "2026-11-16T09:01:09.009Z"
    },
    {
        "title": "Distributed Real-Time Chunking",
        "date": "2026-11-16",
        "slug": "distributed-real-time-chunking",
        "tags": "",
        "summary": "",
        "markdown": "**文章标题：**Distributed Real-Time Chunking\n**文章链接：**https://jackvial.com/posts/distributed-real-time-chunking.html\n\n**研究问题：**\n![image](assets/blog_images/275.png)\n![image](assets/blog_images/276.png)\n\n",
        "updatedAt": "2026-11-16T09:34:39.552Z"
    },
    {
        "title": "Real-Time Execution of Action Chunking Flow Policies",
        "date": "2026-11-16",
        "slug": "real-time-execution-of-action-chunking-flow-policies",
        "tags": "",
        "summary": "",
        "markdown": "**文章标题：**Real-Time Execution of Action Chunking Flow Policies\n**文章链接：**https://arxiv.org/pdf/2506.07339\n\n\n**研究问题：**\n![image](assets/blog_images/268.png)\n\n### 概括：\ndiffusion-based/flow policy系统，后chunk从推理到执行过程中往往需要需要比较多的时间步，该工作对后chunk本来的action chunking进行修正：进行历史数据的修正（无需retrain from scratch，而是在去噪过程中不断引入由和旧动作计划对齐的loss来引导生成新的去噪步），从而trade-off旧动作计划和新动作预测。\n以flow policy为例（**固定初始噪声和观测后，整条生成轨迹就是确定的**），\n假设机器人以50 Hz控制，每20 ms执行一个动作。(action horizon H=50,前后两个推理间隔s=25,推理耗时d=6)。\n一种做法是1-24走chunk one，然后等6步，开始执行31...；一种做法是1-30走chunk one，在25的时候开始生成chunk two的了，根据condition，如果在31开始执行chunk two对应的31，但这就可能出现第25-30步走的是第一个action chunking的轨迹，第31步走的另外一个方向，按照以往常规加权的方案可能会出现结果平均化，比如撞向中间。不折中轨迹上看起来又是突变的。\n![image](assets/blog_images/269.png)\n\n如何使得第31步能考虑到前面本该由它来驱动的前六个chunk呢？（因为时延它在生成中（已经开始有了，还不能用））这个工作允许第一个chunk生成的那六步继续执行，并约束将要生成的后chunk在速度方向上靠近第一个chunk的这六步。六步之后可以开始削弱，直到第一个chunk完结，开始约束下一个chunk。\n### 流程：\n![image](assets/blog_images/270.png)\n![image](assets/blog_images/271.png)\n\n### 一些参数的定义：\n![image](assets/blog_images/274.png)\nJ是“预测终点对当前动作样本的导数”。\n![image](assets/blog_images/273.png)\n### 梯度如何影响速度生成直观解释（**为什么用的是梯度下降**）\n![image](assets/blog_images/272.png)\n",
        "updatedAt": "2026-11-16T09:37:26.231Z"
    },
    {
        "title": "Learning Force Distribution Estimation for the GelSight Mini Optical Tactile Sensor Based on Finite Element Analysis",
        "date": "2026-11-16",
        "slug": "feats",
        "tags": "",
        "summary": "",
        "markdown": "**文章标题：**Learning Force Distribution Estimation for the GelSight Mini Optical Tactile Sensor Based on Finite Element Analysis\n**文章链接：**https://arxiv.org/pdf/2411.03315\n\n**研究问题：**![image](assets/blog_images/277.png)\n\n**整体框架：**\n![image](assets/blog_images/278.png)",
        "updatedAt": "2026-11-22T02:51:12.381Z"
    },
    {
        "title": "关于重力补偿",
        "date": "2026-11-15",
        "slug": "untitled-post",
        "tags": "",
        "summary": "",
        "markdown": "## 关于重力补偿\n\n分为关节重力补偿和末端重力补偿。笔者考虑三种补偿：\n\n**末端空载：**需完成关节重力补偿，主要是重力矩\n根据正运动学：\n![image](assets/blog_images/266.png)\n机械臂静止，q_dot，q_dot_dot都为0，可标定重力矩G(q)。一般的机械臂出厂都需要标定。\n\n**末端加上负载比如六维力传感器、夹爪、相机：**需考虑这部分重量，负载需要标定。\n\n如果动作空间在关节空间，使用正运动学的相关重力标定已完成。接下来考虑动作空间在任务空间。\n\n**考虑任务空间控制的力传感器标定：**此时需要传感器得到较为精准的力信息，需要消除比如说夹爪的重力、重力矩影响。此时使用待定系数法最小二乘可以标定出重力、重力矩。得到的示数应该在传感器上消除掉。\n![image](assets/blog_images/267.png)\n上述是对静止时候的传感器进行标定，如若考虑更符合实际场景中移动场景下的力标定，需要考虑惯性参数。",
        "updatedAt": "2026-11-24T08:30:50.662Z"
    },
    {
        "title": "关于Stop-Gradient and Freeze",
        "date": "2026-11-12",
        "slug": "stop-gradient-and-freeze",
        "tags": "",
        "summary": "",
        "markdown": "## Stop-Gradient and Freeze\n- Freeze：我不更新这个网络的参数，但允许梯度穿过它。\n- Stop Gradient：我不允许梯度穿过这个位置。\n\n总的来说，如果只有一个loss优化，stop gradient和freeze角色相当。如果存在多个loss优化，比如对于两个相连的网络，使用stop gradient方法stop第一个网络时，loss的梯度不会传到第一个网络从而进行更新，但第一个网络仍旧可以通过其它的loss进行更新。但对于freeze方法，如果freeze住了，参数都不会更新。\n\n- [stop gradient trick](https://zhuanlan.zhihu.com/p/1938965923450061196)\n",
        "updatedAt": "2026-11-24T08:30:59.422Z"
    },
    {
        "title": "π0.5: a Vision-Language-Action Model with Open-World Generalization",
        "date": "2026-11-11",
        "slug": "05",
        "tags": "VLA",
        "summary": "",
        "markdown": "**文章标题：**π0.5: a Vision-Language-Action Model with Open-World Generalization\n**文章链接：**https://arxiv.org/pdf/2504.16054\n\n**研究问题：**\n![image](assets/blog_images/257.png)\n![image](assets/blog_images/255.png)\n\n**总体架构：**\n![image](assets/blog_images/256.png)",
        "updatedAt": "2026-11-12T14:00:54.132Z"
    },
    {
        "title": "SmolVLA: A vision-language-action model for affordable and efficient robotics",
        "date": "2026-11-09",
        "slug": "smolvla",
        "tags": "VLA",
        "summary": "",
        "markdown": "**文章标题：**SmolVLA: A vision-language-action model for affordable and efficient robotics\n**文章链接：**https://arxiv.org/pdf/2506.01844\n\n**研究问题：**\n\n\n",
        "updatedAt": "2026-11-09T09:34:40.635Z"
    },
    {
        "title": "Perceptive Humanoid Motion from Simulation",
        "date": "2026-11-09",
        "slug": "perceptive-humanoid-motion-from-simulation",
        "tags": "VLA",
        "summary": "",
        "markdown": "**文章标题：**Perceptive Humanoid Motion from Simulation\n\n**文章链接：**https://arxiv.org/pdf/2611.06908\n\n**研究问题：**\n![image](assets/blog_images/234.png)\n\n**整体算法架构：**\n![image](assets/blog_images/235.png)\n![image](assets/blog_images/236.png)\n\n**相关文献：**[DiT](https://arxiv.org/pdf/2212.09748)\n![image](assets/blog_images/237.png)",
        "updatedAt": "2026-11-10T02:11:27.509Z"
    },
    {
        "title": "Viser: Imperative, Web-based 3D Visualization in Python",
        "date": "2026-11-08",
        "slug": "viser",
        "tags": "Tools",
        "summary": "",
        "markdown": "**文章标题：**Viser: Imperative, Web-based 3D Visualization in Python\n**文章链接：**https://arxiv.org/pdf/2507.22885\n\n**项目链接：**https://viser.studio/main/\n",
        "updatedAt": "2026-11-08T03:16:30.947Z"
    },
    {
        "title": "PyRoki: A Modular Toolkit for Robot Kinematic Optimization",
        "date": "2026-11-08",
        "slug": "pyroki",
        "tags": "Tools",
        "summary": "",
        "markdown": "**文章标题：**PyRoki: A Modular Toolkit for Robot Kinematic Optimization\n**文章链接：**https://arxiv.org/pdf/2505.03728\n**研究问题：**\n![image](assets/blog_images/228.png)\n**specifying kinematic variables and costs：**\n![image](assets/blog_images/229.png)",
        "updatedAt": "2026-11-08T03:20:49.244Z"
    },
    {
        "title": "PolicyIK: High-Precision Inverse Kinematics for Robot Arms with Reinforcement Learning",
        "date": "2026-11-08",
        "slug": "policyik",
        "tags": "",
        "summary": "",
        "markdown": "**文章标题：**POLICYIK: HIGH-PRECISION INVERSE KINEMATICS FOR ROBOT ARMS WITH REINFORCEMENT LEARNING\n**文章链接：**https://arxiv.org/pdf/2611.05372\n\n",
        "updatedAt": "2026-11-08T04:06:34.630Z"
    },
    {
        "title": "frax: Fast Robot Kinematics and Dynamics in JAX",
        "date": "2026-11-08",
        "slug": "frax",
        "tags": "Tools",
        "summary": "",
        "markdown": "**文章标题：**frax: Fast Robot Kinematics and Dynamics in JAX\n**文章链接：**https://arxiv.org/pdf/2604.04310\n\n**研究问题：**![image](assets/blog_images/230.png)\n**几款常见的IK：**\n![image](assets/blog_images/231.png)\n",
        "updatedAt": "2026-11-08T10:23:13.761Z"
    },
    {
        "title": "RTPolicy: Real-Time (32.9 Hz) Multi-View Visuomotor Policy for Robotic Manipulation on Edge Devices",
        "date": "2026-11-08",
        "slug": "rtpolicy",
        "tags": "",
        "summary": "",
        "markdown": "**文章标题：**RTPolicy: Real-Time (32.9 Hz) Multi-View Visuomotor Policy for\nRobotic Manipulation on Edge Devices\n\n**文章链接：**https://arxiv.org/pdf/2610.41625v1\n\n**研究问题：**\n![image](assets/blog_images/233.png)\n\n**总体训练框架及视觉编码器：**\n![image](assets/blog_images/232.png)\n\n\n",
        "updatedAt": "2026-11-08T11:51:27.279Z"
    },
    {
        "title": "关于Denavit–Hartenberg Parameters",
        "date": "2026-11-08",
        "slug": "dh",
        "tags": "Tools",
        "summary": "",
        "markdown": "## 什么是DH参数？\n[reference](https://zhuanlan.zhihu.com/p/2070078437075707781)\n任意两个相邻的关节坐标系，只需要4个几何参数，就能完整描述它们之间的相对位姿。",
        "updatedAt": "2026-11-24T08:54:45.521Z"
    },
    {
        "title": "One Demo is Worth a Thousand Trajectories: Action-View Augmentation for Visuomotor Policies",
        "date": "2026-11-07",
        "slug": "one-demo-is-worth-a-thousand-trajectories-action-view-augmentation-for-visuomotor-policies",
        "tags": "",
        "summary": "",
        "markdown": "**文章标题：**One Demo is Worth a Thousand Trajectories: Action-View Augmentation for Visuomotor Policies\n**文章链接：**https://arxiv.org/pdf/2606.19586\n\n**研究问题：**![image](assets/blog_images/225.png)\n\n## 机器人学习数据增强\n![image](assets/blog_images/226.png)\n\n## 1001 DEMOS\n![image](assets/blog_images/227.png)\n",
        "updatedAt": "2026-11-08T00:59:56.612Z"
    },
    {
        "title": "关于Mixed Reality",
        "date": "2026-11-06",
        "slug": "mixed-reality",
        "tags": "",
        "summary": "",
        "markdown": "reference\n1. https://www.hexfellow.com/\n2. https://dl.acm.org/doi/pdf/10.1145/3726986.3727004\n3. https://arxiv.org/pdf/2610.16186v2\n4. https://arxiv.org/pdf/2203.11324",
        "updatedAt": "2026-11-24T08:31:10.694Z"
    },
    {
        "title": "详解DDIM and DDPM",
        "date": "2026-11-06",
        "slug": "ddim-and-ddpm",
        "tags": "DP",
        "summary": "",
        "markdown": "# DDPM、DDIM\n本文的参数都可以参考[reference](https://github.com/kingkingofall/DDPM_DDIM/blob/main/study.ipynb)\n\n![image](assets/blog_images/221.png)\n从一个干净图片x0开始，前向过程加噪：q(xt-1|xt)，逆向过程去噪：q(xt|xt-1)。这里模型最终辅助我们求解的是p。\n\n这里有几个分布：\n\n- q(x0)所在分布可以是**多峰的**，我们也是希望它是多峰的，\n- q(xt|x0)是固定干净样本后，加噪得到的分布，是严格高斯的\n- q(xt)是所有干净样本加噪后的整体分布，噪声足够大时接近标准高斯\n- q(x_t|xt-1,x0)单步加噪，也是高斯噪声（默认MDP可以去掉x0来看）\n- q(x_t-1|xt,x0)已知干净样本的反向去噪，严格高斯（不管是DDPM/DDIM）\n\n\n## 前向加噪（训练）\n该过程意为训练噪声模型，直到可以来预计累计噪声。\n前向是MDP，单步加噪是正态分布。\n![image](assets/blog_images/216.png)\n用重参数化采样方法表达为：\n![image](assets/blog_images/224.png)\n但因为正态分布叠加性可以快速完成从x0加噪到xt。\n可得xt：\n![image](assets/blog_images/209.png)\n得到xt之后，和t一起构造噪声，再和标签做MSE，来训练噪声模型。\n\n## 去噪（采样）\n这里不叫做推理了，而是从一开始就先随机采样一个xT。这个时候的噪声模型已经可以来预计噪声。目标是求过程中的xt直到求到x0。\n### MDP条件下被建模为，DDPM：\n![image](assets/blog_images/213.png)\n单步去噪输出被建模为条件正态分布（注意是条件）：\n![image](assets/blog_images/217.png)\n其中第一项在MDP条件下xt-1与x0无关，可以等于不带x0条件的p。\n得到均值和方差带入反向公式消去x0：\n![image](assets/blog_images/212.png)\n最终得到：\n![image](assets/blog_images/211.png)\n\n### Non-MDP条件下被建模为，DDIM：\n![image](assets/blog_images/214.png)\n注意这里这样建模是因为，单步去噪可以是任意分布那就假设满足正态分布，且和x0、xt都相关，那就线性叠加作为均值，这里先假设方差为σ，后面计算会发现σ可以为任意数。\nmk待定系数法：\n![image](assets/blog_images/218.png)\n解得：\n![image](assets/blog_images/219.png)\n其中，样本x0未知，但有数据：\n![image](assets/blog_images/212.png)\n由上面第一个公式逆运算，可以知道，得到噪声，因为xt可以高斯采样，就可以知道x0。这也是为什么神经网络虽然预测噪声，但也可以得到x0分布。\n另外，其实每一次从xt求解xt-1可以看成先根据神经网络预测噪声求得x0，然后再加噪加回到xt-1的。\n还可以发现xt-1在这里有两个噪声来源。一个是由xt转回x0来的，一个是得到x0之后加噪回xt-1来的，两个都参与每一个去噪步。\n\n然后，虽然最后我们得到xt-1发现σ可以是任意的，但其实对结果进行分解可以得到：\n![image](assets/blog_images/222.png)\n其中，\n![image](assets/blog_images/207.png)\nη=0时可以看到只有来自神经网络的预测噪声，随xt和t会有不同，随机性来自xT的采样，随后只要确定xt和t，去噪的路径就确定。这里其实有另外一个直觉是，第一个噪声决定xt转回x0的随机性，如果xt定了那它就是定的，第二个噪声决定走势。第二个噪声如果为0意味着加噪相同xt-1相同，这样的话路径就是一样的。\n\n### 总结：\nDDPM加噪与去噪步严格相等，DDIM去噪通过mk方法近似实现加速（去噪步分布可能不是正态分布了，但这里可以假设是）。\nDiffusion Policy 的多峰性来自：不同的初始噪声，经过去噪网络，可能落到不同的动作模式。\n采样的整体流程是，先采样确定xT，开始推理，由xt和t得到噪声，有xt和噪声得到x0，由x0得到xt-1，循环。\n\n### 训练标签怎么来？\n其实整个训练就是对加入的噪声进行拟合：先加入后拟合。噪声的标签都是从干净样本x0到当前xt的**累计**噪声（还是哪个加噪公式）：\n![image](assets/blog_images/223.png)\n基于它就可以得到x0嘛，就是反向了：\n![image](assets/blog_images/212.png)\n\n这里不是手动标签，有点像是非监督学习，但又用了MSE监督目标，最终目标生成多模态action chunk，所以还是属于模仿学习/监督学习。只不过是中间通过x0（数据集）可以知道噪声样本，从而进行训练。\n另外，其实**DDPM训练好的噪声可以给DDIM的采样来用**。噪声（累计噪声）和xt和t，可能还有condition有关。\n\n**上述推导可参考见[reference](https://github.com/kingkingofall/DDPM_DDIM/blob/main/study.ipynb)**\n\n",
        "updatedAt": "2026-11-24T08:31:20.918Z"
    },
    {
        "title": "LLMs can natively read & write neural network weights",
        "date": "2026-11-05",
        "slug": "llms-can-natively-read-write-neural-network-weights",
        "tags": "weight-space programming",
        "summary": "",
        "markdown": "![image](assets/blog_images/171.png)\n\n\nreference\n1. [LLMs can natively read & write neural network weights](https://rikiyat.github.io/blog/weight-space-programming/)",
        "updatedAt": "2026-11-05T03:26:21.796Z"
    },
    {
        "title": "Neural Discrete Representation Learning",
        "date": "2026-11-05",
        "slug": "vq-vae",
        "tags": "",
        "summary": "",
        "markdown": "## 什么是重参数化/Reparameterization Trick\n把随机性从可学习参数中分离出来，使采样结果能够表示为可微函数。\n1. 普通采样\n![image](assets/blog_images/177.png)\n问题在于：采样操作本身涉及随机性，不方便直接对它进行梯度反向传播。\n2. 重参数化\n![image](assets/blog_images/178.png)\n把“带有随机性的采样”转化为了“对 μ 和 σ 的确定性运算”加一个“独立的外部随机噪声 ε”。\n：[referece](https://www.reddit.com/r/MachineLearning/comments/1f3ohje/d_clarification_on_the_reparameterization_trick/?tl=zh-hans)\n\n## 什么是MCMC/Markov Chain Monte Carlo\n假设我们有一个目标概率分布，希望从中抽取样本。我们希望：\n- 峰值附近的区域更容易被采样。\n- 概率低的区域不容易被采样。\n- 最终采样结果的分布与目标分布一致。\n但问题是：我们不知道如何直接从这个复杂分布中抽样。\nMCMC就是解决这个问题的：不能直接抽样时，通过当前位置不断提出候选位置，并根据接受概率决定是否移动。\n![image](assets/blog_images/179.png)\n\n\n## stop-gradient\n1. 前向传播时：什么也不改变\n2. 反向传播时：阻止梯度穿过它\n如果 teacher 本来就是冻结模型，那么 stop-gradient 主要用于明确切断计算图和减少显存。如果 teacher 与 student 共享部分参数，或者 teacher 是 student 的 EMA 副本，停止梯度就尤其重要。\n### 在蒸馏student policy时的应用:\n[Consistency Models](https://arxiv.org/abs/2303.01469)\n[RL-100](https://arxiv.org/pdf/2510.14830v1)\n\n![image](assets/blog_images/185.png)\n\n\n## [CVAE]\n(https://arxiv.org/abs/2203.01218)\n![image](assets/blog_images/190.png)\n这里decoder 通常输出的是分布参数。得到分布后把数据集x带入可以计算loss。\n![image](assets/blog_images/180.png)\n![image](assets/blog_images/184.png)\n这里用到NLL/Negative Log-Likelihood/负对数似然，它的意义是：衡量模型给真实数据x分配的概率密度有多高。\n![image](assets/blog_images/181.png)\n由于Decoder的输入是q分布，cvae的重建loss期望是对q的。用的还是NLL。\n![image](assets/blog_images/182.png)\n![image](assets/blog_images/183.png)\n它希望 Encoder 采样出来的潜变量z，能够让 Decoder 输出一个对真实数据x赋予较高概率密度的分布。所以这里指的重建损失应该是原始数据x出现在预测分布里概率的多大程度匹配的损失。\n\n## [VQ-VAE]\n(https://arxiv.org/pdf/1711.00937)\n![image](assets/blog_images/189.png)\n\n![image](assets/blog_images/186.png)\n![image](assets/blog_images/187.png)\n\n分开写的价值是能独立控制两边的学习力度：\n![image](assets/blog_images/188.png)\n\n\n",
        "updatedAt": "2026-11-05T13:26:11.570Z"
    },
    {
        "title": "cvae and vq-vae",
        "date": "2026-11-05",
        "slug": "cvae-and-vq-vae",
        "tags": "",
        "summary": "",
        "markdown": "## 什么是重参数化/Reparameterization Trick\n把随机性从可学习参数中分离出来，使采样结果能够表示为可微函数。\n1. 普通采样\n![image](assets/blog_images/177.png)\n问题在于：采样操作本身涉及随机性，不方便直接对它进行梯度反向传播。\n2. 重参数化\n![image](assets/blog_images/178.png)\n把“带有随机性的采样”转化为了“对 μ 和 σ 的确定性运算”加一个“独立的外部随机噪声 ε”。\n：[referece](https://www.reddit.com/r/MachineLearning/comments/1f3ohje/d_clarification_on_the_reparameterization_trick/?tl=zh-hans)\n\n## 什么是MCMC/Markov Chain Monte Carlo\n假设我们有一个目标概率分布，希望从中抽取样本。我们希望：\n- 峰值附近的区域更容易被采样。\n- 概率低的区域不容易被采样。\n- 最终采样结果的分布与目标分布一致。\n但问题是：我们不知道如何直接从这个复杂分布中抽样。\nMCMC就是解决这个问题的：不能直接抽样时，通过当前位置不断提出候选位置，并根据接受概率决定是否移动。\n![image](assets/blog_images/179.png)\n\n\n## stop-gradient\n1. 前向传播时：什么也不改变\n2. 反向传播时：阻止梯度穿过它\n如果 teacher 本来就是冻结模型，那么 stop-gradient 主要用于明确切断计算图和减少显存。如果 teacher 与 student 共享部分参数，或者 teacher 是 student 的 EMA 副本，停止梯度就尤其重要。\n### 在蒸馏student policy时的应用:\n[Consistency Models](https://arxiv.org/abs/2303.01469)\n[RL-100](https://arxiv.org/pdf/2510.14830v1)\n\n![image](assets/blog_images/185.png)\n\n\n## [CVAE]\n(https://arxiv.org/abs/2203.01218)\n![image](assets/blog_images/190.png)\n这里decoder 通常输出的是分布参数。得到分布后把数据集x带入可以计算loss。\n![image](assets/blog_images/180.png)\n![image](assets/blog_images/184.png)\n这里用到NLL/Negative Log-Likelihood/负对数似然，它的意义是：衡量模型给真实数据x分配的概率密度有多高。\n![image](assets/blog_images/181.png)\n由于Decoder的输入是q分布，cvae的重建loss期望是对q的。用的还是NLL。\n![image](assets/blog_images/182.png)\n![image](assets/blog_images/183.png)\n它希望 Encoder 采样出来的潜变量z，能够让 Decoder 输出一个对真实数据x赋予较高概率密度的分布。所以这里指的重建损失应该是原始数据x出现在预测分布里概率的多大程度匹配的损失。\n\n## [VQ-VAE]\n(https://arxiv.org/pdf/1711.00937)\n![image](assets/blog_images/189.png)\n\n![image](assets/blog_images/186.png)\n![image](assets/blog_images/187.png)\n\n分开写的价值是能独立控制两边的学习力度：\n![image](assets/blog_images/188.png)\n\n\n",
        "updatedAt": "2026-11-05T13:35:30.756Z"
    },
    {
        "title": "How to Get Involved in Computing Research as an Undergrad at UC Berkeley",
        "date": "2026-11-04",
        "slug": "how-to-get-involved-in-computing-research-as-an-undergrad-at-uc-berkeley",
        "tags": "",
        "summary": "",
        "markdown": "转自：[How to Get Involved in Computing Research as an Undergrad at UC Berkeley](https://abbykoneill.github.io/posts/undergrad-research-berkeley.html)\n",
        "updatedAt": "2026-11-04T05:57:03.659Z"
    },
    {
        "title": "A brief history of VLAs",
        "date": "2026-11-04",
        "slug": "a-brief-history-of-vlas",
        "tags": "VLA",
        "summary": "",
        "markdown": "## 关于离散：\n早期VLA的设计沿用LLM的思路，把action当成语言来用，即采用离散的描述，比如动作归一化到[-1.1]之后，用16/256 bins来切割。一个很直观的理解是，当action的颗粒度越精细，描述的action越趋近于连续，自然重建精度会越高。\n![image](assets/blog_images/155.png)\n![image](assets/blog_images/156.png)\n另外，可以使用clipping方法进一步约束action space（比如寻找到action的1%和99%边界，优化掉之外的action）。如图实验均方根表明，当bins小的时候，clipping方法的可以更进一步提高重建精度，当bin=64和256时，都没有提升，且当bin=256时，位置的均方根误差有5.5倍扩大。\n![image](assets/blog_images/158.png)\n\n## demonstrations在vla训练中的角色：interface\n![image](assets/blog_images/152.png)\n\n\n## A brief history of VLAs（from RT-1 to MolmoAct ）\n1） the coke can demo：“RT2, to move the Coke can to Taylor Swift”\n2） SayCan：Using language models to plan into various subtasks which were trained to imitate humans. This means that SayCan was limited to a menu of actions.\n3)  so RT-1 comes in: RT-1 uses discretization for this, trained on 130k successful robotics episodes, 13 robots and 700 tasks and over 17 months.\n![image](assets/blog_images/154.png)\n![image](assets/blog_images/153.png)\n4)  RT-2（discrete action）: Teaching a VLM to act. RT-1 does not know the meaning of every concept and Web-trained VLMs works.\n![image](assets/blog_images/159.png)\n5） Open X-Embodiment and RT-X: Learning across robots：What about transferring experience between different robots?\nOpen X-Embodiment brought together 21 institutions to pool over 1 million robot trajectories across 22 robot embodiments and 527 skills.\n![image](assets/blog_images/160.png)\nRT-2-X achieved 75.8% success compared to RT-2's 27.3%.\n![image](assets/blog_images/161.png)\n\n6) OpenVLA（discrete action）: A 7B-parameter open-source VLA trained on 970k robot demonstrations from Open X-Embodiment which consists of a visual encoder（SigLIP provides features and DINOv2 for spatial information） + projector + Llama 2 language model.\n![image](assets/blog_images/163.png)\nWhile evaluating across 29 tasks on WidowX and Google robots, OpenVLA outperformed the much larger 55B RT-2-X by 16.5 percentage points in average success.\n![image](assets/blog_images/169.png)\n\n7）Octo（continuous action）: Making robot policies adaptable, pretrained on 800k robot demonstrations from 25 Open X-Embodiment datasets, consists of input encoders + Transformer + diffusion action head：Could we build a pretrained robot policy that could be easily adapted to new robots, camera setups, and action spaces?\n![image](assets/blog_images/162.png)\nUnlike RT-1 and RT-2’s discrete action tokens, Octo uses a diffusion head to generate continuous action chunks.{for multimodality}\nThe evaluation was done across nine real-robot setups. After finetuning with 100 demos per task it acheived 72% average success across six setups compared to 20% for their policy trained from scratch.\n\n\n8) π0（predicting consequences）: How should a robot predict its next move?\nBy early 2024, a number of key members of the RT2 team had left Google and reassembled to form the startup physical intelligence which consists of PaliGemma + an action expert. \n![image](assets/blog_images/164.png)\n\n9）SmolVLA：has around 450M parameters(roughly 1/16th of openVLA). They use only the first half of the VLM’s language decoder layers and reduce each image to 64 visual tokens.\nThey have used asynchronous inference setup.\n![image](assets/blog_images/165.png)\n\n10) MolmoAct: introduces three stages: predicting depth, generating a visual trajectory, and finally producing robot actions.\n![image](assets/blog_images/166.png)\n![image](assets/blog_images/167.png)\n\n11) MolmoAct2：builds on this with improved spatial reasoning, adaptive depth prediction, and a continuous flow-matching action expert, making the approach considerably faster and more practical.\n![image](assets/blog_images/168.png)\n\n\nreference：\n1.[A brief history of VLAs](https://x.com/starlitmatcha/status/2116918927913804223)",
        "updatedAt": "2026-11-04T09:37:52.999Z"
    },
    {
        "title": "RL-100: Performant Robotic Manipulation with Real-World Reinforcement Learning",
        "date": "2026-11-04",
        "slug": "rl-100",
        "tags": "RL",
        "summary": "",
        "markdown": "**文章标题：**RL-100: Performant Robotic Manipulation with Real-World Reinforcement Learning\n**文章链接：**https://arxiv.org/pdf/2510.14830v1\n\n**研究问题：** how can we build a robotic learning system that leverages strong human priors yet continues to refine itself through autonomous exploration? \n![image](assets/blog_images/174.png)\n\n**总体框架：**\n![image](assets/blog_images/175.png)\n**算法：**\n![image](assets/blog_images/176.png)\n### 关于 transition function：\n1. Train critics遵循IQL的Q、V网络设计；\n2. Train trainsition使用[AW-Q](https://arxiv.org/pdf/2311.03351)方法：\nmodel-based。 用学到的(T(s'|s,a))模拟轨迹，决定是否接受候选策略。H为向前模拟的步长。\n1）NLL训练transition function：\n![image](assets/blog_images/196.png)\n2）计算向前模拟H步的Q均值：\n![image](assets/blog_images/197.png)\n3）通过gate机制决定是否更新clip-style生成的新策略：\n![image](assets/blog_images/198.png)\nWHAT is OTO RL：\n![image](assets/blog_images/193.png)\n![image](assets/blog_images/195.png)\n\n### 关于two-level MDP：\n嵌套去噪步和时间步，MDP与sub-MDP：\n![image](assets/blog_images/205.png)\n\n### 关于Unified PPO objective over denoising steps\n![image](assets/blog_images/199.png)\n跟ppo的clip loss类似，但是这里求的是一个时间步对应的k个噪声步的loss的均值。\n![image](assets/blog_images/200.png)\npolicy ratio的更新也是以去噪步为单位的。\n后续将作为offlineRL和onlineRL共同的policy improvement。\n总的来说，offlineRL输入初始policy，policy evaluation用IQL更新Q和V得到A，显式训练transition function并用AW-Q通过预判Q的优略进一步约束policy improvement，在去噪步上；onlineRL时间步上GAE更新A和V，在去噪步维度上更新策略。\n![image](assets/blog_images/201.png)\n注意V代码用的是GAE更新的，不是用的regressive discounted return。\n\n### 关于CM|consistency model\n![image](assets/blog_images/202.png)\n![image](assets/blog_images/203.png)\n限制训练时噪声的bound：\n![image](assets/blog_images/204.png)\n\n### 关于reward\n![image](assets/blog_images/206.png)\n",
        "updatedAt": "2026-11-06T06:49:22.465Z"
    },
    {
        "title": "Steering Your Diffusion Policy with Latent Space Reinforcement Learning",
        "date": "2026-11-04",
        "slug": "dsrl",
        "tags": "RL",
        "summary": "",
        "markdown": "**文章标题：**Steering Your Diffusion Policy with Latent Space Reinforcement Learning\n\n**文章链接：**https://arxiv.org/pdf/2506.15799\n\n**研究问题：**\nbc在开放世界中泛化不足，rl有比较好的在线finetuning能力。文章提出一种不修改base policy weight来adapt rl的方法：adapting the BC policy by running RL over its latent-noise space\n![image](assets/blog_images/238.png)\n\n**方案：**\n![image](assets/blog_images/243.png)\n![image](assets/blog_images/239.png)\n\n\n### 关于DSRL-NA\n![image](assets/blog_images/244.png)\n两个critic，QA和QW，训练从w服从标准正态分布出发。\n![image](assets/blog_images/246.png)\n从Fig.2也可以看到，也如作者所讲，DSRL-NA能够确保输出in-distribution的动作，因为尽管DSRL-NA在online improvement的过程中会选择不同的w，但这是在noise latent space发生的，action space一直被约束在前期由pi_dp定好的空间内，所以DSRL-NA方法不会输出从来没见过的action（在线更新的时候会出现新的估值更高的动作方案，但应该也是动作组合不一样，每一个动作依旧在那个dp已经定义好了的空间里），且是一种不需要显式定义约束的方法。\n![image](assets/blog_images/245.png)\n\n### 关于Diffusion Steering\n![image](assets/blog_images/242.png)\n![image](assets/blog_images/241.png)\n![image](assets/blog_images/240.png)\n\n\n\n\n",
        "updatedAt": "2026-11-11T09:28:35.990Z"
    },
    {
        "title": "Failure-Aware RL: Reliable Offline-to-Online Reinforcement Learning with Self-Recovery for Real-World Manipulation",
        "date": "2026-11-03",
        "slug": "failure-aware-rl",
        "tags": "RL",
        "summary": "",
        "markdown": "**文章标题：**Failure-Aware RL: Reliable Offline-to-Online Reinforcement Learning with Self-Recovery for Real-World Manipulation\n\n**文章链接：**https://arxiv.org/pdf/2601.07821\n\n**研究问题：**\n![image](assets/blog_images/133.png)",
        "updatedAt": "2026-11-03T03:43:59.743Z"
    },
    {
        "title": "OFFLINE REINFORCEMENT LEARNING WITH IMPLICIT Q-LEARNING",
        "date": "2026-11-03",
        "slug": "iql",
        "tags": "RL",
        "summary": "",
        "markdown": "**文章标题：**OFFLINE REINFORCEMENT LEARNING WITH IMPLICIT Q-LEARNING\n**文章链接：**https://arxiv.org/pdf/2110.06169\n\n**研究问题：**\n![image](assets/blog_images/148.png)\n![image](assets/blog_images/138.png)\n\n**算法思路：**\n1. 用 Bellman Regression 学习数据动作的 Q 值\nCritic (Q-value Function): fits action values with Bellman regression.\n![image](assets/blog_images/135.png)\n\n实践中常用以下的公式：\n![image](assets/blog_images/191.png)\n1）TD方向需要固定住上一次V网络的输出；\n2）并添加终止状态掩码(1-d)，d=1表示真正终止，此时目标就是r，不再累加未来价值；非终止时d=0。\n\n2. 通过 Upper Expectile 估计较优动作的价值\nValue (State Value Function): learns a value function biased toward high-return regions via expectile regression.\n![image](assets/blog_images/136.png)\n![image](assets/blog_images/137.png)\n实践中常用以下的公式：\n![image](assets/blog_images/192.png)\n\n3. 计算 Advantage，通过 AWBC 优先模仿高 Advantage 的动作\nActor (Policy Model): updates the policy with advantage-weighted behavior cloning (Advantage-Weighted BC).\n![image](assets/blog_images/139.png)\n\n",
        "updatedAt": "2026-11-06T03:09:52.237Z"
    },
    {
        "title": "offline-to-online RL",
        "date": "2026-11-03",
        "slug": "offline-to-online-rl",
        "tags": "RL",
        "summary": "",
        "markdown": "offline-to-online RL\n![image](assets/blog_images/172.png)\n放弃，是为了更好的成长！\n![image](assets/blog_images/247.png)\n\n\nreference：\n1. [Failure-Aware RL](https://arxiv.org/pdf/2601.07821)\n![image](assets/blog_images/134.png)\n2. [RL-100](https://arxiv.org/pdf/2510.14830)\n![image](assets/blog_images/170.png)\n3.[UNI-O4](https://arxiv.org/pdf/2311.03351)\n![image](assets/blog_images/194.png)",
        "updatedAt": "2026-11-11T09:33:33.276Z"
    },
    {
        "title": "state value function and action value function",
        "date": "2026-11-03",
        "slug": "state-value-function-and-action-value-function",
        "tags": "RL",
        "summary": "",
        "markdown": "## 关于state value function and action value function:\n![image](assets/blog_images/143.png)\n![image](assets/blog_images/144.png)\n\n计算 Q 时，动作已经给定；计算 V 时，动作还没有确定，需要考虑可能采取的动作。Q和V的贝尔曼方程形式类似，但V需要再计算一下不同action condition下的Q的期望。\n![image](assets/blog_images/145.png)\n![image](assets/blog_images/146.png)\n![image](assets/blog_images/147.png)\n\nBellman Optimality Equation（BOE）\n小tip：把对a取期望的项目去掉，换成Max（相当于均值换成最大值）\n![image](assets/blog_images/150.png)\n![image](assets/blog_images/149.png)\n![image](assets/blog_images/151.png)\n\n## 关于state value function更新的三种不同方式\n![image](assets/blog_images/249.png)\n：\n1. DP方法：通过已知的环境模型（Model），也就是状态转移概率和奖励函数，对所有可能发生的结果进行加权求和得到的，而不是通过实际采样的数据估计出来的。\n\n![image](assets/blog_images/253.png)\n![image](assets/blog_images/254.png)\n![image](assets/blog_images/252.png)\n2. MC方法：\n![image](assets/blog_images/250.png)\n![image](assets/blog_images/251.png)\nREINFORCE方法就是用的MC方法采样来做的策略梯度。loss常用到优势函数而不是价值函数。\n\n[reference](https://lilianweng.github.io/posts/2018-02-19-rl-overview/)\n\n",
        "updatedAt": "2026-11-12T02:29:47.832Z"
    },
    {
        "title": "online/offline RL and on-policy/off-policy RL",
        "date": "2026-11-02",
        "slug": "online-offline-rl-and-on-policy-off-policy-rl",
        "tags": "",
        "summary": "",
        "markdown": "online/offline RL:transition是否是在新的rollout中的到得到\n\non-policy/off-policy RL：数据的行为策略（Behavior Policy）是否需要与当前学习的策略一致，判断的时候可以看behavior policy和target policy（training target）是否一致。\n-------------------------------------------------------\nOnline On-policy\t持续交互，使用当前策略数据\tPPO、TRPO\n\nOnline Off-policy\t持续交互，允许使用历史策略数据\tSAC、TD3、DQN、RLPD\n\nOffline On-policy\t不再交互，使用固定数据\t严格定义下通常不成立为标准 On-policy RL\n\nOffline Off-policy\t不再交互，使用固定数据集\tCQL、IQL\n\nreference:\n1. https://lei-kun.github.io/blogs/rl.html",
        "updatedAt": "2026-11-04T02:46:55.992Z"
    },
    {
        "title": "BC loss、Cross Entropy、MSE loss and AWBC",
        "date": "2026-11-02",
        "slug": "bc-loss-cross-entropy-mse-loss-and-awbc",
        "tags": "RL",
        "summary": "",
        "markdown": "**BC loss、Cross Entropy、MSE loss and AWBC**\n1. 普通 Behavior Cloning（BC）\n1） 离散动作空间交叉熵：BC 的交叉熵实际上是在最大化专家动作的似然。\n![image](assets/blog_images/127.png)\n非one hot编码求解：\n![image](assets/blog_images/130.png)\none hot编码求解:\n![image](assets/blog_images/131.png)\n2） 连续动作空间使用MSE\n![image](assets/blog_images/129.png)\n\n2. Advantage-Weighted BC（AWBC, using in IQL)\n![image](assets/blog_images/128.png)\n",
        "updatedAt": "2026-11-03T03:35:03.299Z"
    },
    {
        "title": "Waypoint-Based Imitation Learning for Robotic Manipulation",
        "date": "2026-10-28",
        "slug": "waypoint-based-imitation-learning-for-robotic-manipulation",
        "tags": "DP",
        "summary": "",
        "markdown": "**文章标题:**Waypoint-Based Imitation Learning for Robotic Manipulation\n**文章链接:**https://arxiv.org/pdf/2307.14326\n**研究问题:**Waypoints can help address this problem by reducing the horizon of the learning problem for BC, and thus, the errors compounded over time. Can we generate waypoints automatically without any additional human supervision?\n![image](assets/blog_images/114.png)\n\n方法介绍:\n![image](assets/blog_images/117.png)\n![image](assets/blog_images/118.png)\n![image](assets/blog_images/119.png)\n\n真机经验:\n![image](assets/blog_images/116.png)\n![image](assets/blog_images/115.png)",
        "updatedAt": "2026-10-28T07:35:56.244Z"
    },
    {
        "title": "MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations",
        "date": "2026-10-28",
        "slug": "mimicgen",
        "tags": "DATA",
        "summary": "",
        "markdown": "**文章标题:**MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations\n\n**文章链接:**https://arxiv.org/pdf/2310.17596\n\n**研究问题:** ![image](assets/blog_images/120.png)\n![image](assets/blog_images/121.png)\n\n**实验设计:**\n![image](assets/blog_images/122.png)\n\n\n\n",
        "updatedAt": "2026-10-28T09:00:04.013Z"
    },
    {
        "title": "Redundancy & Null-Space Control",
        "date": "2026-10-28",
        "slug": "redundancy-null-space-control",
        "tags": "",
        "summary": "",
        "markdown": "reference:\n1. \nhttps://marionlepert.github.io/tutorials/operational-space-control/part-4-nullspace-control.html\n2. https://learnsyslab.github.io/crisp_controllers/getting_started_controller_details/",
        "updatedAt": "2026-10-28T09:00:29.919Z"
    },
    {
        "title": "Efficient Online Reinforcement Learning with Offline Data",
        "date": "2026-10-28",
        "slug": "rlpd",
        "tags": "RL",
        "summary": "",
        "markdown": "**文章标题:**Efficient Online Reinforcement Learning with Offline Data\n**文章链接:**https://arxiv.org/pdf/2302.02948\n**研究问题:**![image](assets/blog_images/123.png)\n**什么是UTD:\"\n![image](assets/blog_images/125.png)\n**温度调节的是什么?**\n温度参数alpha调节的是：策略优化时，对随机性（熵）有多重视。\n![image](assets/blog_images/126.png)\n**训练思路:**\n1. 选择几个critic作为subset z来参与Q优化(随机采样最小的)\n2. 添加熵项来优化Q函数\n3. G次critic更新对应1次actor更新\n![image](assets/blog_images/124.png)\n\n**reference:**\n1. https://rlinf.readthedocs.io/en/latest/rst_source/reference/algorithms/rlpd.html\n",
        "updatedAt": "2026-10-28T09:49:05.587Z"
    },
    {
        "title": "the difference of diverse simulators",
        "date": "2026-10-27",
        "slug": "the-difference-of-diverse-simulators",
        "tags": "",
        "summary": "",
        "markdown": "** MJLAB <- Mujoco Warp/MJX-JAX(GPU) <- Mujoco **\n![image](assets/blog_images/109.png)\n** isaac lab <- isaac sim + PhysX/Newton **\n![image](assets/blog_images/110.png)",
        "updatedAt": "2026-10-27T05:44:35.257Z"
    },
    {
        "title": "Singular Value Decomposition",
        "date": "2026-10-27",
        "slug": "svd",
        "tags": "",
        "summary": "",
        "markdown": "什么是机器人ik中的奇异值分解(SVD)?\n![image](assets/blog_images/111.png)",
        "updatedAt": "2026-10-27T08:45:35.873Z"
    },
    {
        "title": "J-PARSE: Jacobian-based Projection Algorithm for Resolving Singularities Effectively in Inverse Kinematic Control of Serial Manipulators",
        "date": "2026-10-27",
        "slug": "j-parse",
        "tags": "",
        "summary": "",
        "markdown": "**文章标题:**J-PARSE: Jacobian-based Projection Algorithm for Resolving Singularities Effectively in Inverse Kinematic Control of Serial Manipulators\n**文章链接:**https://arxiv.org/abs/2505.00306\n**控制框架:**\n![image](assets/blog_images/112.png)\n**方法:**\n![image](assets/blog_images/113.png)",
        "updatedAt": "2026-10-27T08:50:06.955Z"
    },
    {
        "title": "Real-world Reinforcement Learning from Suboptimal Interventions",
        "date": "2026-10-26",
        "slug": "real-world-reinforcement-learning-from-suboptimal-interventions",
        "tags": "RL",
        "summary": "",
        "markdown": "**文章标题:**Real-world Reinforcement Learning from Suboptimal Interventions\n**文章链接:**https://arxiv.org/pdf/2512.24288\n\n![image](assets/blog_images/106.png)\n![image](assets/blog_images/108.png)\n\n![image](assets/blog_images/107.png)\n\n\n",
        "updatedAt": "2026-10-27T05:41:33.532Z"
    },
    {
        "title": "Precise and Dexterous Robotic Manipulation via Human-in-the-Loop Reinforcement Learning",
        "date": "2026-10-19",
        "slug": "hil-serl",
        "tags": "RL",
        "summary": "",
        "markdown": "**文章标题:**Precise and Dexterous Robotic Manipulation via Human-in-the-Loop Reinforcement Learning\n**文章链接:**https://hil-serl.github.io/static/hil-serl-paper.pdf\n\n**Real-world human intervention reinforcement learning:**\n![image](assets/blog_images/102.png)\n![image](assets/blog_images/103.png)\n\n**reward classifier:**\n![image](assets/blog_images/104.png)\n\n**reactive policy and preditive policy:**\n![image](assets/blog_images/105.png)\n\n**这一篇工作的控制器值得研究,twist controller/feedforward force controller.**",
        "updatedAt": "2026-10-26T11:41:45.089Z"
    },
    {
        "title": "Robust Ladder Climbing with a Quadrupedal Robot",
        "date": "2026-10-09",
        "slug": "robust-ladder-climbing-with-a-quadrupedal-robot",
        "tags": "RL",
        "summary": "",
        "markdown": "**文章标题：**Robust Ladder Climbing with a Quadrupedal Robot\n**文章链接：**https://arxiv.org/pdf/2409.17731\n\n**整体训练框架：**\n![image](assets/blog_images/101.png)",
        "updatedAt": "2026-10-09T16:34:43.489Z"
    },
    {
        "title": "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
        "date": "2026-09-21",
        "slug": "bert",
        "tags": "NLP",
        "summary": "",
        "markdown": "**文章标题：**BERT: Pre-training of Deep Bidirectional Transformers for\nLanguage Understanding\n**链接：**https://arxiv.org/pdf/1810.04805\n1.BERT：Encoder-only\n![image](assets/blog_images/92.png)\n\n2.GPT: Decoder-only\n![image](assets/blog_images/93.png)\n\n3.The differnece\n![image](assets/blog_images/91.png)",
        "updatedAt": "2026-09-21T09:59:36.800Z"
    },
    {
        "title": "what is kv_cache?",
        "date": "2026-09-21",
        "slug": "kv-cache",
        "tags": "",
        "summary": "",
        "markdown": "**参考blog:**https://huggingface.co/blog/not-lain/kv-caching\n对于attention过程：\n![image](assets/blog_images/95.png)\nKV Cache本质上就是占用memory的一块缓存换取计算速度的一种方式。不过只保存当前一次生成过程里的 attention 中间结果。\n![image](assets/blog_images/94.png)",
        "updatedAt": "2026-09-21T12:19:51.076Z"
    },
    {
        "title": "AR-VLA: Autoregressive Action Expert for Vision–Language–Action Models",
        "date": "2026-09-21",
        "slug": "ar-vla",
        "tags": "VLA",
        "summary": "",
        "markdown": "**文章标题：**AR-VLA: Autoregressive Action Expert for Vision–Language–Action Models\n**文章链接：**https://arxiv.org/pdf/2603.10126\n**Motivation：**![image](assets/blog_images/96.png)\n**insights from the author:**\nhttps://zhuanlan.zhihu.com/p/2034747452851483505\n",
        "updatedAt": "2026-09-21T12:28:12.227Z"
    },
    {
        "title": "Test-Time Gradient Guidance of Flow Policies in Reinforcement Learning",
        "date": "2026-09-21",
        "slug": "qgf",
        "tags": "RL",
        "summary": "",
        "markdown": "**文章标题：**Test-Time Gradient Guidance of Flow Policies in Reinforcement Learning\n**文章链接：**https://arxiv.org/pdf/2606.11087\n**Motivition：**\n![image](assets/blog_images/97.png)",
        "updatedAt": "2026-09-21T12:35:12.827Z"
    },
    {
        "title": "Factorizing Diffusion Policies for Observation Modality Prioritization",
        "date": "2026-09-21",
        "slug": "fdp",
        "tags": "DP",
        "summary": "",
        "markdown": "**文章标题：**Factorizing Diffusion Policies for Observation Modality Prioritization\n\n**文章链接：**https://arxiv.org/pdf/2509.16830\n**Motivation：**\n![image](assets/blog_images/98.png)",
        "updatedAt": "2026-09-21T12:53:44.628Z"
    },
    {
        "title": "GPT 6 Astra as an Embodied Policy",
        "date": "2026-09-21",
        "slug": "gpt-6-astra-as-an-embodied-policy",
        "tags": "Agentic Robot Learning",
        "summary": "",
        "markdown": "**文章标题：**GPT 6 Astra as an Embodied Policy\n**文章链接：**https://anonymous-report-421.github.io/public-website/?view=1\n\n**相关链接：**\n1. https://lilianweng.github.io/posts/2026-07-04-harness/\n2. https://github.com/zjwzcx/Awesome-Astra-Embodied-AI\n",
        "updatedAt": "2026-09-21T13:01:33.062Z"
    },
    {
        "title": "GaP: A Graph-as-Policy Multi-Agent Self-Learning Harness For Variational Automation (VA) Tasks",
        "date": "2026-09-21",
        "slug": "graph-as-policy",
        "tags": "Agentic Robot Learning",
        "summary": "",
        "markdown": "**文章标题：**GaP: A Graph-as-Policy Multi-Agent Self-Learning\nHarness For Variational Automation (VA) Tasks\n**文章链接：**https://arxiv.org/pdf/2607.05369\n**what is Variational Automation？**\n![image](assets/blog_images/99.png)\n**Overall Architecture：**\n![image](assets/blog_images/100.png)",
        "updatedAt": "2026-09-21T13:10:43.356Z"
    },
    {
        "title": "TacVLA: Contact-Aware Tactile Fusion for Robust Vision-Language-Action Manipulation",
        "date": "2026-09-05",
        "slug": "tacvla",
        "tags": "VLA",
        "summary": "",
        "markdown": "**文章标题：**TacVLA: Contact-Aware Tactile Fusion for Robust Vision-Language-Action Manipulation\n**文章链接：**https://arxiv.org/pdf/2603.12665\n**总体架构：**\n![image](assets/blog_images/88.png)\n主要创新点是对触觉进行门控，符合接触才使用触觉模态的直观想法",
        "updatedAt": "2026-09-05T03:47:52.716Z"
    },
    {
        "title": "FA-RDP: A Frequency-Adaptive Reactive Diffusion Policy for Contact-Rich Manipulation",
        "date": "2026-09-05",
        "slug": "fa-rdp",
        "tags": "DP",
        "summary": "",
        "markdown": "**文章标题：**FA-RDP: A Frequency-Adaptive Reactive Diffusion Policy for Contact-Rich Manipulation\n**文章链接：**https://arxiv.org/pdf/2607.28596\n\n![image](assets/blog_images/90.png)",
        "updatedAt": "2026-09-05T18:01:06.255Z"
    },
    {
        "title": "Scaling Diffusion Policy in Transformer to 1 Billion Parameters for Robotic Manipulation",
        "date": "2026-08-30",
        "slug": "scaledp",
        "tags": "DP",
        "summary": "",
        "markdown": "**文章标题：**Scaling Diffusion Policy in Transformer to 1 Billion Parameters for Robotic Manipulation\n**链接：**https://arxiv.org/pdf/2409.14411\n**Motivation：**\n![image](assets/blog_images/85.png)\n**AdaLN架构：**\n![image](assets/blog_images/86.png)\n**Results：**\n1. 对比轻量级ScaleDP和DP从易到难任务的成功率\n2. 对比ScaleDP不同量级参数从易到难任务的成功率\n3. 对比ScaleDP不同量级参数Disassembling任务随着专家数据量增大任务的成功率\n4. 对比ScaleDP不同量级参数Assembling任务随着专家数据量增大任务的成功率\n5. 对比ScaleDP不同量级参数Assembling任务随着training steps次数增大（相当于前向->反向->参数更新的次数）任务的成功率\n5. 对比ScaleDP不同量级参数堆cube任务随着training steps次数增大（相当于前向->反向->参数更新的次数）loss收敛\n![image](assets/blog_images/87.png)\n\n",
        "updatedAt": "2026-08-30T15:33:56.525Z"
    },
    {
        "title": "Learning a Unified Policy for Position and Force Control in Legged Loco-Manipulation",
        "date": "2026-08-29",
        "slug": "unifp",
        "tags": "RL",
        "summary": "",
        "markdown": "**文章标题**：Learning a Unified Policy for Position and Force Control in Legged Loco-Manipulation\n**链接**：https://unified-force.github.io/\n\n**总体推理架构**：![image](assets/blog_images/81.png)\n\n**思考**：是不是和物理世界交互的模态，都应该用一个estimator来估计真实的隐空间信号，并且是不是这样子给任务带来的understanding要优于直接赋予显式信号的sensor带来的？换句话说，在unift这个工作中，这样的estimator是否学到了除了力之外的其它信号？\n\n**训练：**在isaac gym上训练rl policy，训练好直接部署到真机上，通过遥操采集数据训练dp。\n",
        "updatedAt": "2026-10-09T16:38:28.519Z"
    },
    {
        "title": "Catch It! Learning to Catch in Flight with Mobile Dexterous Hands",
        "date": "2026-08-29",
        "slug": "catchit",
        "tags": "RL",
        "summary": "",
        "markdown": "**文章标题：**Catch It! Learning to Catch in Flight with Mobile Dexterous Hands\n\n**链接：**https://arxiv.org/pdf/2409.10319\n**总体架构：**\n![image](assets/blog_images/84.png)",
        "updatedAt": "2026-08-29T08:59:40.584Z"
    },
    {
        "title": "RLDG: Robotic Generalist Policy Distillation via Reinforcement Learning",
        "date": "2026-08-29",
        "slug": "rldg",
        "tags": "RL",
        "summary": "",
        "markdown": "**文章标题**：RLDG: Robotic Generalist Policy Distillation via Reinforcement Learning\n**链接**：https://generalist-distillation.github.io/\n\n**总体架构**：![image](assets/blog_images/82.png)",
        "updatedAt": "2026-09-05T03:44:49.900Z"
    },
    {
        "title": "SCORE-BASED GENERATIVE MODELING THROUGH STOCHASTIC DIFFERENTIAL EQUATIONS",
        "date": "2026-06-01",
        "slug": "score-based-generative-modeling-through-stochastic-differential-equations",
        "tags": "SDE",
        "summary": "",
        "markdown": "**文章标题；**SCORE-BASED GENERATIVE MODELING THROUGH STOCHASTIC DIFFERENTIAL EQUATIONS\n**链接；**https://arxiv.org/pdf/2011.13456\n![image](assets/blog_images/80.png)",
        "updatedAt": "2026-06-01T13:33:07.445Z"
    },
    {
        "title": "Diffusion Policy through Conditional Proximal Policy Optimization",
        "date": "2026-05-30",
        "slug": "diffusion-policy-through-conditional-proximal-policy-optimization",
        "tags": "DP",
        "summary": "",
        "markdown": "**文章标题；**Diffusion Policy through Conditional Proximal Policy Optimization\n**链接；**https://arxiv.org/pdf/2603.04790\n![image](assets/blog_images/77.png)",
        "updatedAt": "2026-05-30T16:22:59.684Z"
    },
    {
        "title": "Ielts-words",
        "date": "2026-05-23",
        "slug": "ielts-words",
        "tags": "",
        "summary": "",
        "markdown": "2026-5-23\nsentiment 情感\nconfine 限制\npeasant 农民\nbarbarian 野蛮人\nEmpire\nspectacles 眼镜\nimmense 巨大的\ncoincidence 巧合\nfavoured 大众喜爱的\nexcavations 发掘\nEmpire 帝国\nimperial 帝国的\nemperor 皇帝\nOstia 奥斯蒂亚\n\n2026-5-22\nglued 粘住的\ntape 胶带\nadhesive paste 粘合剂\ncommenced 开始的\ncaptive 囚徒\nrhesus 猕猴\nfabric 布料\nfibres 纤维\nadjective 形容词\nstitching 针脚\ncanoes 独木舟\nexclusive 独有的，排外的\nstuck 卡住\nwoven 编织的\nsewn 缝制的 -sew\ncoated 涂层的\nleak 漏\nstraw 稻草\nenlargements 放大\nlanding 登陆\nsuburbs 郊区\nmakeover 改进；修饰；翻新\nethnic 民族的\ntribal 部落的\nwelsh 威尔士语\nflax 亚麻\nbark 树皮\nmoulds 霉菌\nreluctant 不情愿的\nlimbs 四肢\nnecklace 项链\nartefacts 文物\nvenue 活动场地\nchoir 合唱团\nbuffet 自助餐\ngarbage 垃圾\nmingle 使混合，与结合\ncandid 坦率的\ngermination 萌发\nParadoxically 矛盾的\nnegligible 可以忽略的\nempirically 根据经验的\ntyphoid 伤寒\ncholera 霍乱\noverpowering 强烈的\nthereafter 之后\nspeculate 推测\nrehearsals 排练\nmucus 黏液，鼻涕\nshellfish 水生有壳动物\nanticipating 预期\nmedieval 中世纪的\nnegotiate 谈判\nseal 密封\ncaravan 旅行拖车\nsnowboarding 单板滑雪\nsailing 帆船运动\nrevise 改变，修改，复习\nexhibits 展品\ndissolve 溶解\ndegrade 降解\ncotton 棉花\nkeep off 远离\ninconclusive 不确定的\nin the vicinity of a place 在一个地方的附近\ntram 有轨电车\nsatellites 卫星\nsurveillance 监控\npinpointed 准确指出\nnutrients 养分\n\n2026-05-25\nsheer 完全的；垂直地\ncratered and barren 布满陨石坑和贫瘠的；荒芜的\nmeteorites 陨石\nfatigue 极度疲惫\nghrelin 胃促生长素\nrope 绳子\nblanket 毯子\nSprained knee 扭伤的膝盖\nanatomy 解剖学\nvast 广阔的\ndolphin 海豚\nburdened 负担沉重的\nexotic 奇异的；异国的\nplain 清楚的；坦率的 candid\ndefects 缺陷 defend\ninadvertently 无意地\ndisruptive 破坏性的\nmundane 平凡的\nadolescent 青少年\nbreeders 饲养者\nenvision 设想\ncast spells 施法\ncast 投\ncrack 裂开；裂缝\n\n2026-05-26\nreceptor 受体\nsophisticated 见多识广的；老练的；见过世面的\ndevoted 忠诚的；挚爱的\nolfactory 嗅觉的\nscant 微小的\nvicinity 附近\ncontinents 大陆\nafield n 原理家乡\npresence 出席 attendance\ndispersion 色散\n\n2026-05-27\ndepicted 描绘\nlivestock 家畜\nprecipitation 降水\nloan 贷款\ntoggle 切换；切换键\nmitigate 减轻\nauxiliary 辅助的\nstaircase 楼梯\nrental 租金\nloyalty 忠诚\n\n2026-05-28\ncracks 裂缝\neclipse 日食\ncargo 货物\ninscriptions 铭文\nlump 块 a lump of\nsplitting 头痛欲裂的\nflour 面粉\nlawn 草坪\nfossils 化石\nhostile 敌对的 aggressive\naggregate 总数\nswarm 蜂群\npresumably 很可能\nherd 兽群\ntransmission 传送；变速器\npitch 场地；投\ncredited 归功于\namended 已修订\nascend 上升\ngranular 由颗粒构成的\ngrain 谷物\ntheatrical 戏剧的；夸张的 theater exaggerate\nclaque 拍手\nfrancs 法郎\npatrons 顾客\nvenues 场地 venue revenue 收益\nforecourt 空地\nallergenic 过敏性\nbirch 白桦树\nportraits 肖像\nIt's brand new 这是全新的\npollen 花粉\ndemystified 揭开神秘面纱\nsuperstitions 迷信\ntrap 陷阱\nunwary 不提防的\nbarchans 新月形沙丘\npragmatic 实用的\nfoghorn 雾角\ntumbling 翻滚 thumb 拇指\nvibrate 振动\nsynchronisation 同步\n\n2026-05-29\nhoax 恶作剧\nassholes 混蛋\nfork 叉子\nelementary 初级的\ncarrots 胡萝卜\ndivision 分开；除法\nintuitive 直觉的 instinctive\nintuition 直觉 instinct\nreflection 映像；沉思\nmute adj 沉默的 unmute\npersist 顽强地做\n\nunderlie 构成..的基础\nundergo 忍受\nundertake 承担\nunderestimate 低估\nunderdog 失败者\nunderline 强调\nundermine 逐渐削弱；挖墙脚\nundergrowth 灌木丛\n\n2026-05-30\ndensity 密度\ndestiny 命运 destinies\nnursery 婴儿室 nurse\nconserve 保护 safeguard\namenity 设施 amenities\nheritage 遗产\nsheds 棚子\nreserve 预定 reservation\ntestified 作证\nworkaholic 工作狂 shopaholic 购物狂\noverrun 肆虐；泛滥\noutwit 智力上超过\ninevitably 不可避免地\ncruel 残酷的\nchaste 贞洁的\nrocky 岩石的\npublishers 出版商\nsuperb 极佳的\nnasty 极差的；危险的\nmistresses 情妇\nsilver 银色的；银\n\n2026-5-31\npalace 王宫\naural 听觉的\ncatchy 悦耳的\npunchy 有力的\ncharacteristics 特征\nfragments 碎片\nentrenched 根深蒂固的\nanticipation 预料\nearworms 洗脑循环曲\npersistent 执着的\nintervals 间隔的\npitch 投\nsubconscious 下意识的\njustification 正当理由\ntestify 证明\nrenovated 革新\nburnt 烧坏的\nexaggerate 夸张\npreserved 保存的\npresence 在场\ndolphin 海豚\nmosaic 马赛克\nexcavated 挖掘\nunderpin 加强\nplumber 水暖工\nbrilliant 巧妙的\ndull 枯燥无味的\nmod 模组\nmagnitude 数量\nintroverted\nintrusive 侵入的\nweeds 杂草\nhooks 钩子\n\n2026-06-01\napparatus 仪器 equipment\npunctually 准时地\npersuade 说服\nlaborious 辛苦的\nentitled 有权的\nThese kids are spoiled, entitled, self-absorbed, and apathetic. 这些孩子被宠坏了，为所欲为、自恋且冷漠。\nself-absorbed 自我中心的\nsubsidy 补贴\nbonus 奖金\nperks 福利\nwading 涉水\nwedding 婚礼\nmangrove 红树林\ngrove 树丛\ndemolished 拆除\ntruck 卡车\ninflate 膨胀\nceilings 天花板\n\n2026-06-03\nshortcut 捷径\nsecondary school\nchorus 合唱曲\nchoir 合唱团\nvocalno 火山\ncomposers 作曲家\ncrave v 渴望\nnewlyweds 新婚夫妇\nhoneymoon 蜜月\nsanity 精神健全；明智\nimmunizations 免疫接种\nessay 短文；n 企图\ndiploma 毕业文凭\nlife spans 寿命\nnut 坚果；故意撞击\nnap 打盹\nnet 网\nthought 想法\nthough/although 尽管\nthrough 通过\nthorough 彻底\nfeasible 可行的\nflexible 灵活的\nlaboratory 实验室\nelaborate 详细说明\npetrol 汽油\nboot 靴子；猛踢\nreboot 重启\nsetback 挫折\nflaw 错误；弱点\ndebilitation 衰弱\ndeliberation 审议\ndeliberate 故意的；仔细考虑\npertinent 有关的\nextent 程度\nrelentless 不停的\nrelent 终于答应\ninnate 天生的\nrepertoire 可表演项目\nwell lit：space that is brightly illuminated\nlord 贵族\nlounge 休息室\nquote 引用；报价\nconsensus 共识\nconvex 凸\nadverse 不利的\nreverse 反向\nverse 诗句\nTranscendence 超越\nbeverage 饮料\ninitiate 开始；使了解\nmeditation 冥想\nmedication 药\nmarvel 惊奇\nsecondary school：high school 高中\njunior school：middle school 初中\n\n2026-06-04\noutlive 比...活得长\nspotlight 聚光灯\neminent 著名的\nmysticism 神秘主义\nmysterious 神秘的\nculminated 达到顶点\ncapacity 容量；职位\nsubordinates 下属\nwithhold 拒绝给\nentitled 有权的\ncouch 长沙发\ncommissioning 调式\ncompetitors 竞争者\ndiscriminating 有鉴赏力的\ndisgusting 恶心的\ndecisive 决定性的\ngradually 逐渐地\nexcess 超过\n\nconscious 有意识的\nobjection 反对的理由\ngenuine 名副其实的；真心的\nopt 选择\ninterprete 解释\nsoldier 士兵 military 军队\nArgentina 阿根廷\nfurnished 配备家具的\ndefense 防御\ndefeats n 战败；v 击败\ndefects 缺陷\nspines 脊柱\npest 害虫\ncursive 草书\nlegible 清晰的\nneat 整洁的\nvictory 胜利\nvicinity 附近\nrefraction 折射\nstylish 时髦的 fashion\nstretch 拉伸\nrigorous 谨慎的\ndeference 尊重\nelevator 电梯 lift\nendeavor 努力 effort\nchord 和弦\ndesperate 绝望的；渴望；极严重的\nartefacts 文物\nareal 面积的\ncosmography 宇宙学\ncosmo 宇宙\ncommence 开始\nembarking 开始\nintact 完整的\npredecessor 前任\ncontemporaries 当代的；同辈人\nbasic rations aboard their ships 船上的基本口粮\nacoustic 声音的\ncircuitry 电路\nimpairments 损伤\nstutter 口吃\nsubtle 机智的；敏锐的\nauditory-motor loop 听力-运动 回路\n\n2026-06-05\nconviction 定罪；坚信\nmonologue 独白\nauditorium 礼堂\nobligation 义务\n\nbend 弯曲；弯道\nadjecent to 邻近的\nzigzag 锯齿形线条\ncylinder 圆柱体；气缸\nsouvenir 纪念品\ncafeteria 自助餐厅\nyard 某种用途的场地\ncourtyard 院子\ncourt 球场\nemergency 突发事件\ndiscs 光盘\nseaweed 海草\nharbour 港湾\npurple 紫色的\nsamphire 海茴香\ncoconut 椰子\ncattle 黄牛\nhelicopter 直升机\ntailor 裁缝\nspoon 勺子\nmonument 纪念碑；历史建筑\ncolony 殖民地\ncomets 彗星\ncoma 昏迷\nthermometer 温度计\nclarinet 单簧管\nflute 长笛\nmarble 大理石\ncrow 乌鸦\nslavery 奴隶\nflagstone 板岩石\nliter 升\ndiameter 直径\nradius 半径\nmoist 微湿的\ncanal 运河\nfountain 喷泉\ntaxation 税\ncabins 小屋\nmassage room 按摩室\nmediator 调停者 to act as a mediator in the negotiations\nnest 巢\n\n2026-06-06\nutensil 器皿\nindigenous 本地的\nrapport 报告\ndivorce 离婚\nhorn 羊角；干预\nfeminine 女性的\nsynthetic 人造的 artificial\n\n2026-06-07\npremium 保险费；额外费用\npump 泵；涌出\nantibiotic 抗菌素\nreligion 宗教\nregion 地区\nkinesthetic 动觉的\nmerit 优点\nritual 礼节\nventilated 通风的\npertinent 有关的\nventure 企业；敢于去\noffshore 海上的 offshore investments\nlegislation 法律\nlegible 清晰的\ndiscrepancy 差异\ninduce 诱导\nheuristic-based 基于启发的\n\n2026-06-08\nIn spite of 尽管\nflee 逃避\nsmouldering 闷烧的\nimpose 强加\nforage 觅食；饲料\nplight 苦难\ntight 紧的\ndivine 天赐的；猜到\nbliss 极乐\npreen 刻意打扮\nfashion v 制作；塑造\ntranscend 超出\ncondescend 屈尊；对某人表现出优越感\nscissors 剪刀\nbait 诱饵\nmeticulous 细心的\nurban centres 市中心\ntank 坦克\nrehab 康复\ntuna 金枪鱼\nnets 网\ninstinctive 本能的\nsadden 使难过\ntangible 真实的；实际的\nvessels 船只\ncrew 船上的工作人员\nteacher's aide： teaching assistant\njuggernaut 巨无霸\nreflect 反映\nventilation 通风\nvent 通风口\naggravating 令人恼火的\nfrog 青蛙\nchimney 烟囱\ninfrared 红外线的\npaint 油漆\nexpanses 开支\nexacerbating 加剧\nbe more to blame than 比..更应受责备\nfertility 富饶\nimmune 免疫\nink 墨水\niron 铁\nkidney 肾脏\nminerals 矿物质\nmoderate 适度的\npottery 陶器\nreflective 沉思的\nrumor 谣言\nshade 阴凉处\nsharks 鲨鱼\nslaves 奴隶\nsweetener 甜味剂\nwaterproof 防水的\nwax 蜡\napron 围裙\nash 灰\nbakery 面包店\nbargain 便宜货；讨价还价\nbooklet 小册子\nburied 埋葬\ncarnival 嘉年华\ncheque 支票\nchurches 教堂\ncompose 作曲\ncotton 棉花\ndiploma 毕业文凭\nweave 编织 wove\nbustling 繁忙的\nFor now, we must be content with one extraordinarily beautiful cloth—courtesy of more than a million spiders.目前，我们必须满足于一块异常美丽的布——这是由一百多万只蜘蛛共同贡献的。\nyarn 纱线\nlure 诱导\npanic 惊恐\nprerequisite 前提\nportrayed 描绘\napnea 呼吸暂停\nimpede 阻碍\nwound 伤口\nintake 摄入量\nbring in 引进；收获\nbring up 提出；教育\nbring out 出版；生产\nbring about 引起\ngrocery 食品杂货店\nlamb 小羊羔\nornaments 装饰品\noctopuses 章鱼\noctopuses\ntrucks 卡车\navocados 鳄梨\nshallow 浅的\nSoviet 苏联\nSoctland 苏格兰\nscam 欺诈\nfactually 事实上\ngalloping 迅速增加的\nsculpture 雕塑\npredominant 显著的\nprescriptions 处方\n\n2026-06-10\nliteracy 读写能力\nscarcity 缺乏\nself-disciplined 自律的\nrack 架子\nsquare 广场\ndescendants 后代 generation\nequate ... with ... 同等于\npersuade 说服\n\n2026-06-11\nrhyme 押韵\nlyrics 歌词\ninvestigation 调查\ncheque：check 支付/转账\ntuition 学费\ninstitution/agency 机构\nduty 责任/义务\nscore a goal 进球\nshocked 震惊\nprecious 珍贵的\nprevious 之前的\nprecise 准确的\nbrilliant 巧妙的；杰出的\nentrepreneur 创业者\neagle 鹰\nowl 猫头鹰\nnight owl 夜猫子\neclipse 日食\nevaporation 蒸发\nexternal 外部的\nfrog 青蛙\ngrave 坟墓；严重的\nherb 草药\nherd 兽群\nhormones 荷尔蒙\nhumor 幽默\ninvestor 投资者\njudo 柔道\nyoga 瑜伽\nnylon 尼龙\noccupancy 占用\npillow 枕头\npilots 飞行员\nportable 便携的\nprevalent 普遍存在的\nrack 架子\nrival 竞争对手\nvirus 病毒\nsculptures 雕塑\nservant 仆人\nshellfish 水生动物\nstarvation 饥饿\nstomach 胃\ntimber 木材\nwages 工资\nScotland 苏格兰\nseminar 研讨会\nacid 酸的\narid 干旱的\ncrocodile 鳄鱼\navocado 鳄梨\nconfront 处理；面对\nuttered 说出\nsecretive 不外露的\nverbal 口头上的 oral\nscroll down/through 滚屏\nanimated 栩栩如生的\nsyllable 音节\nflax 亚麻\ndetractors 批评者\npreventative 预防的\nremedies 补救措施\nmainstream 主流\nunrealistically 不切实际地\nlarge corporations 大公司\npartly/partially 部分地\ncomic 漫画\ntricky/naughty 调皮的\n\n\n2026-06-18\nlimbs 四肢\ngarments 衣服\ncotton 棉花\nripping 美妙的\nelastic 弹性的\nmould 模具；霉菌\narrow 箭头\nzoology 动物学\nsocks 袜子\nwax 蜡\nsaliva 唾液\nnitrogen 氮\ntribute 致敬；体现\nassignment 工作；分派\nrent 租\nstarter 开胃菜\nbedsit 起居兼卧室两用租间\ncottage 小屋\nfaculty 能力；院系\npurse 钱包\ninland 内陆的\nkits 套件\nlender 放款人\nloan 贷款\nmaid 女仆\noculist 眼科医生\nperk 津贴；活跃\npeak 顶峰\nforestry 林业\ndelegate 代表\ncot 余切\ntribe 部落\ncurling 冰壶\nunsocial 非正常工作时间的\nslim 苗条的\noptic 光学的\ncostly 花钱多的\noccupational 职业的\nconservative 保守的\nutensils 餐具\nchin/jaw 下巴\ncater 提供餐饮服务\nconquest 征服\nconqueror 征服者\ninjection 注射\nadequate 足够的\nartistic 艺术的\npar 标准杆\ncooperation 合作\ncorporate 公司的\ncreek 克里克人\ndomestic 本国的；驯养的\nemergency 突发事件\ncoarse/fine 粗糙的/细致的\nprescription 处方\nmelancholic 忧郁的\n\n2026-06-20\nprime 主要的\nsneak 溜走；偷偷走\ntide 潮汐；潮水；趋势\nanchovy 鳀鱼\ntuna 金枪鱼\nplankton 浮游生物\nsewage 下水道\nvet 兽医\ndrift 漂移\nventure 冒险\nlone survivors 孤独的幸存者\nan account of the consequences of jellyfish as lone survivors 以孤身幸存者视角讲述水母的遭遇\ndumping 倾倒\nWhich TWO of the following are possible causes of an increase in jellyfish numbers?以下哪两项可能是水母数量增加的原因？\nBut legal understanding is just as vital and as universally needed.但法律认知同样至关重要，也同样具有普遍意义。\neutrophication 富营养化\nbred 繁殖\nreared 养大的\ncontaminated 被污染的\napprovingly 赞许地\ndelicated 专心地；献身的\nfascination 魅力；入迷\nrhetorical 反问的；修辞的\nexclamation 感叹\nself-possession 镇定自若的\nnavy 海军\nlieutenant 陆军中尉；海军上尉\nice is a slow mover 冰移动得很慢\nverbal 口头的；文字的；动词的\nequivalent 相等的；相同的\nassertion 断言；认定；主张\nerectus 直立人\n\n2026-06-22\nturnover 营业额；人员调整率\nWhat is the impact of high staff turnover on managers? 高员工流动率对经理有什么影响？\nincentives 激励\nretention 保持；维持\nresentful 憎恨的\nbat 蝙蝠\nupside-down 倒过来\nbooed 嘘\nspectators 观众\nconversion 转变\nculminating 达到高潮\nmoderate 适度的\nroutine 常规；常规的\nfraction 分数\neradication 根除\nicon 图标\nspecimen 样本\nanatomy 解剖学\noffshore 海上的\nwhatsoever 丝毫\nindigenous 本地的\nliberates 解放\nfiercely 猛烈地\ncirculation 流通\nvigilant 警觉的\nbut the evidence continues to accumulate in its favour 但越来越多的证据对它有利\nthe material was being mass produced for another purpose 这种材料原本是为其他用途而大量生产的\n\n2026-06-24\nladder 梯子\nprefrontal 前额叶\nneural 神经的\nrigid 坚硬的；固执的\nstrips 条\nstabilise 稳定\npliant 柔顺的\ncortex 皮层\npneumatic 充气的；气动的\nritual 仪式\ndepicts 描绘\ncarpets 地毯\ngrubby 卑鄙的；邋遢的\nplumber 水暖工\nelectrician 电工\nwonders 奇观\naquatic 水生的\ndevoid 缺乏\nrestoration 整修；回归\nmonument 纪念碑\nstatues 雕像\nbrick 砖块\ndescent 下降\ncoasters 杯垫\nbureaucratic 官僚主义的\nstatecraft 治国才能\ncraft 手艺；技巧\ndraft 草稿；草图\ndisenchantment 幻灭\nmills 工厂\nscaffolding 脚手架（建筑搭建过程中）\ndignity 庄重；自尊\nimpetus 动力\nretrieval 取回；检索\ndeference 尊重；遵从\ncollapse 坍塌\nviolence 暴力\nintensify 增强\ncostume 服装\ncarriage 运输；四轮马车\ngrooming 打扮\ntractors 拖拉机\nweeding 除草\n\n2026-06-27\noffense 攻势 \noffensive 冒犯的\ncommit an offense 犯罪\nrehearsal 排练\njitters 紧张不安\nthrive 茁壮成长\ncomposed 由...组成的；平静\nshattered 精疲力竭的；遭受极大打击的\ncottage 小屋\ncabin 小屋\nmarquee 大帐篷；最重要的\ncarve 雕刻\ncave 洞穴\nrefreshments 点心\nprobation 缓刑\nbursary 奖学金\ncaravan 大篷车\njungle 丛林 \nlandlordlandlady 房东房东女人\ncostume 服装\ncustomer 消费者\nsteam 水蒸气\nstream 小河；水流\nastrophysics 天体物理学\nplumber 水暖工\nCGI is popular among ageing actors CGI在老年演员中很受欢迎\nadministered 管理\ndamp 潮湿的\npurchase 购买\ntenacity 坚韧\ntoughness 坚韧\ntenant\nscatters 散开\npenetrates 穿透\nstretch 拉伸\nscratch 抓\ndurian 榴莲\npottery 瓷器\nvoid 空\ntame 驯养的；驯化\ncarriageway 车行道\nsyllabus 教学大纲\nsymposium 研讨会\nseminar 研讨会\nforge 锻造\nself-contained 自给自足的\nrecreation 娱乐\nhectares 公顷\n\n2026-06-28\niron 铁；坚强的\nicon 图标\ndeficiency 缺乏\nceremony 仪式\noutlet 感情，思想的出路\ncastle 城堡\nmortal 凡人\nimmortal 神仙\nfungus 菌类\nmultidisciplinary 涉及多门学科的\nglistening 闪闪发光的\ncigar 雪茄\nphiltres 魔药\nlustrous 柔软光亮的\na short burst of fame 一阵短暂的名声\nthrilled 非常兴奋的 \nthrive 茁壮成长\ngrill 烤；烤架\ncoat 外套；涂\nruling 裁决；统治的\nmutually 相互地\nslices 切片\ninvaluable 极宝贵的\ncrises 危机\nhostile 敌意的；坚决否定\nhostage 人质\norganism 生物；有机体\norange 橙子\nmounds 土堆\nmould 模具\nthe effect is less convincing when seen close up. 近距离观察时，效果就不那么明显了。\ndisastrous 极糟糕的；灾难性的\nsympathetic 同情的；赞同的\n\nportrayed 描绘\nsubmerged 淹没\nemitted 发出\ncement 水泥\nfly ash 飞灰\naspirations 抱负\n\n2026-06-29\nbold 大胆自信的；明显的；粗体的\nfoyer 家；休息厅\nlobby 大厅\ncirculation 流通\nunprecedented 前所未有的\nwithstand\nbooths 展位\nvictoria 维多利亚\nobscured 模糊的\nvague 模糊的\nambiguous 模糊的\ninduct 引入\nrental 租金；出租\nretention 保留\nmonitor 统计\nimpressionist 印象派画家\ncommendable 值得表扬的\ncommend 赞扬\nprevalence 普遍性\noff the rack 成品或现成的衣物\nrack 支架；使痛苦不堪\nroam 闲逛；漫步\ncurators 策展人\nglamorous 独特的\nsupplant 取代\njuggle 有效利用；玩杂耍\n\n2026-07-02\nherbal 药草的\nharbour 港口\nprospect 可能性；前景\nfossil 化石\nfluids/liquid 液体\ncorn 玉米\npeanuts 花生\nlaundry 洗衣物\ncousin 同辈表亲\nirrigation 灌溉\nimmigration\nmigration 迁移\nsweetener 甜味剂；贿赂\napron 围裙\nfur 皮毛\nvillage 村庄\nvegetable 蔬菜\nnegative 消极的\nsuburbs 郊区\nflat 公寓；水平的\nItalian 意大利\nScotland 苏格兰\neagle 鹰\nthreat 威胁\nsticker 贴纸\nstick 刺；刺入；纸条\npetrol 汽油\ncookery 烹饪\ngrocery 食物杂货店\npizza 披萨\nreception 接待处\nsalary 薪水\nextinct 灭绝的\nacademic 学术的\npoverty 贫穷\nnylon 尼龙\npottery 瓷器\ncarpet 地毯\ncargo 货物\ncarbon 碳\nblanket 毯子\nbrushes 刷子\nyoga 瑜伽\nfactory 工厂\nfertility 生育力\nprocedure 程序\ndolphins 海豚\nwhales 鲸鱼\nswan 天鹅\ncarnival 嘉年华\nkidney 肾脏\nvirus 病毒\nrumor 谣言\nhumor 幽默\n\n2026-07-03\nconsent 同意\nvenue 活动场地\nrevenue 收益\nself esteem 自尊\nconcise 简明的\nbrushes 刷子\nbroom 扫把\ncircular 圆形的\ncurling 冰壶\nrink curling 冰壶场\ntribe 部落\nbill 喙\ntalons 爪子\nA morepork uses its sharp talons to catch or stun its prey, which it then carries away in its bill. 新西兰猫头鹰用它锋利的爪子捕捉或击晕猎物，然后用喙叼走。\nanother reporter dryly concluded. 另一位记者冷冷地总结道。\nstun 眩晕\ncourtesy 礼貌\nscrambles 争夺\neccentric 古怪的\nintriguing 引人入胜的的\nease 容易\nparasites 寄生虫\ndescended 下降的\nstrain 压力；植物/动物种类\nsymbiosis 共生关系\nshredded 切丝的\npractise n：practice\npropagated 传播\nchambers 房间\n\n2026-07-04\nintrinsic 固有的\ncounter-productive 适得其反\nepistemology 认识论\nelucidate 阐明\nrule out 排除\nwhistle 口哨\nroof 屋顶\nmoisture 潮气\nretention 保持\nretentful\nretentless\nallocation 分配\ncharismatic 有号召力的\ncrosswords 填字游戏\ntake aback with 被...吓了一跳\nbut I was still taken aback with the low numbers. 但我还是被这么低的数字吓了一跳\nobsolete 过时的\nShe is not applying herself enough to her work. 她对工作不够用心。\nsubstantial 大量的\nsubstance 物质；重要性\nimmense 巨大的\ningredients 配料\nmedieval 中世纪的\ncomplimentary 免费的；赞美的\nvanish 突然消失\nsnowbound 被雪困住的\nthrilled 非常兴奋的\na big draw: attract a large number of people\nvouchers  代金券\ncereals 谷物\ncoal 煤\npanic 惊慌\na wealth of: a large amount of\ncutlery 餐具\nfootwear 鞋类\na bright side 积极的一面\na proper meal 一顿正餐\na bit squashed 有点挤\ndetract from 减损\nallowance 津贴；体谅\nin bulk 批量\ncost a fortune 花了一大笔钱\nsoar 急升\nbleak 不乐观的；荒凉的\nscarcity 缺乏\nstraight away 立刻\nfrightening 引起恐惧的\nlife expectancy 预期寿命\nmiasma 瘴气\nhereditary 遗传的\nhold back: to not do sth\npasta or a casserole 意面或砂锅菜\nconfess 坦白；忏悔；承认\n\n2026-07-05\nIt's the opposite of planetary defence. 这和行星防御正好相反。\nhefty 很重的\norbit 天体轨道\nmankind 人类\nplanetary-defence 行星防御\ntrance-like 恍惚的\ntrance 恍惚\nfrippery 不必要的昂贵饰品\nemulate 努力赶上\nparsed 已解析\npluck 拔\noctave 八度\nshoot 开枪；幼苗\nasteroids 小行星\ngarment 衣服\ncommerce 贸易\nquotas 配额\ntariffs 关税\nadvent 到来\nfreight 货运\nspan 跨度\nmedal 奖章\nfountain 喷泉\nmeteroroid 流星体\nretrieval 检索\nshipment 运输\nfirm 公司\ncomedy 喜剧\nmolting 换羽\nwithstand 承受\nknots 结\nshampoos 洗发水\nrivals 竞争对手\ncosmetics 化妆品\ncobwebs 蜘蛛网\nsophisticated 见多识广的；复杂巧妙的；在行的\nspotty 多粉刺的\nintensive 密集的\nshrinking 缩水的\nsew 缝\nstitch 缝\nrefrain 克制；避免\nstrain 压力\nrevolt 反抗\nbonus 奖金\nsavory 美味的\nbiscuit 饼干\nruins 废墟\ncampsites 露营地\nlay-by 临时停车区\njail 监狱\nhut 简陋小房子\nqueues 排队\nhoover 吸尘器\n\n2026-07-07\nsophisticated 复杂的；老练的；精密的\nprologue 开场白；序幕\nassembly 会议；议会；装配\nsubassembly 子组件\n\n2026-07-08\nnail 指甲；钉子\ncoma 昏迷\ncringe 畏缩；难为情\n\n\n2026-07-10\ncomplementary 互补的\ncomparatively 相对地\n\n2026-07-19\ninstantiation 实例化\n",
        "updatedAt": "2026-07-19T02:15:51.262Z"
    },
    {
        "title": "Action Chunking with Transformers",
        "date": "2026-05-22",
        "slug": "action-chunking-with-transformers",
        "tags": "ACT",
        "summary": "",
        "markdown": "**文章标题；**Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware\n**链接；**https://arxiv.org/pdf/2304.13705\n```bash\nact/\n├── imitate_episodes.py        # 训练/评估入口，主要参数从命令行传入\n├── constants.py               # 任务参数、数据路径、episode_len、camera_names 等\n├── policy.py                  # ACTPolicy 封装\n└── detr/\n    ├── main.py                # DETR/Transformer 默认参数、optimizer\n    └── models/\n        └── detr_vae.py        # ACT 模型结构、latent_dim、action_head 等\n```\n\na,c->encoder->z \nz,c->decoder->a\nloss = L1(â, a) + β KL(q(z|a, qpos) || N(0, I))\n```bash\nβ trade-off: 动作重建能力  vs  推理时泛化稳定性\n太大：z 会失去作用，ACT 会退化得更像普通 BC，出现 posterior collapse:\n1. 多模态动作表达能力下降\n2. 复杂动作可能被平均\n3. 重建 loss 变高\n4. 动作可能更保守\n\n太小：decoder 太依赖 z，推理时突然给它 z=0，就会出现 train-test mismatch：\n1. 训练 loss 很低，容易过拟合\n2. 推理时z 没有真实动作信息匹配不上\n```",
        "updatedAt": "2026-05-23T06:32:49.097Z"
    },
    {
        "title": "Adaptive Compliance Policy",
        "date": "2026-05-20",
        "slug": "adaptive-compliance-policy",
        "tags": "DP",
        "summary": "",
        "markdown": "**文章标题；**Adaptive Compliance Policy\n**链接；**https://arxiv.org/pdf/2410.09309\n![image](assets/blog_images/70.png)\n1. 为什么一定程度上调节刚度可以使得系统具备柔顺性？（从不穿透约束/接触间隙的角度）\n![image](assets/blog_images/71.png)\n只要机器人在接触力方向 f = J^T λ 上没有被高刚度锁死，那么理论上就可以加入一个沿接触反力方向的速度分量 k f，让系统满足不穿透约束 Jv ≥ 0。\n2. x_virtual label如何获取？\n![image](assets/blog_images/72.png)\n![image](assets/blog_images/73.png)",
        "updatedAt": "2026-05-20T13:39:49.931Z"
    },
    {
        "title": "Dense Policy",
        "date": "2026-05-17",
        "slug": "dense-policy",
        "tags": "DP",
        "summary": "",
        "markdown": "**文章标题；**Dense Policy: Bidirectional Autoregressive Learning of Actions\n\n**链接；**https://arxiv.org/pdf/2503.13217\n**核心；**\n![image](assets/blog_images/56.png)\n**网络架构；**\n![image](assets/blog_images/57.png)\n",
        "updatedAt": "2026-05-17T06:48:23.011Z"
    },
    {
        "title": "ARP",
        "date": "2026-05-17",
        "slug": "arp",
        "tags": "ACT",
        "summary": "",
        "markdown": "**文章标题；**Autoregressive Action Sequence Learning for Robotic Manipulation\n**链接；**https://arxiv.org/pdf/2410.03132\n**核心；**\n![image](assets/blog_images/58.png)\n**网络架构；**\n![image](assets/blog_images/59.png)",
        "updatedAt": "2026-05-17T06:52:45.754Z"
    },
    {
        "title": "ICRT",
        "date": "2026-05-17",
        "slug": "icrt",
        "tags": "ACT",
        "summary": "",
        "markdown": "**文章标题；**In-Context Imitation Learning via Next-Token Prediction\n**链接；**https://arxiv.org/pdf/2408.15980\n**网络架构；**\n![image](assets/blog_images/60.png)\nrandomization/noise\n![image](assets/blog_images/61.png)",
        "updatedAt": "2026-05-17T06:57:55.952Z"
    },
    {
        "title": "VITA",
        "date": "2026-05-17",
        "slug": "vita",
        "tags": "FM",
        "summary": "",
        "markdown": "**文章标题：**VITA: VISION-TO-ACTION FLOW MATCHING POLICY\n**链接；**https://arxiv.org/pdf/2507.13231\n**思路；**\n![image](assets/blog_images/62.png)",
        "updatedAt": "2026-05-17T07:59:57.141Z"
    },
    {
        "title": "Implicit Behavioral Cloning",
        "date": "2026-05-17",
        "slug": "implicit-behavioral-cloning",
        "tags": "EBM",
        "summary": "",
        "markdown": "**文章标题；**Implicit Behavioral Cloning\n**链接；**https://arxiv.org/pdf/2109.00137\n**核心；**\n![image](assets/blog_images/64.png)",
        "updatedAt": "2026-05-17T12:59:22.549Z"
    },
    {
        "title": "Action-to-Action Flow Matching",
        "date": "2026-05-17",
        "slug": "action-to-action-flow-matching",
        "tags": "FM",
        "summary": "",
        "markdown": "**文章标题；**Action-to-Action Flow Matching\n**链接；**https://arxiv.org/pdf/2602.07322\n**randomization；**\n![image](assets/blog_images/66.png)\n![image](assets/blog_images/65.png)\n\n",
        "updatedAt": "2026-05-17T15:04:16.704Z"
    },
    {
        "title": "Responsive Noise-Relaying Diffusion Policy",
        "date": "2026-05-17",
        "slug": "responsive-noise-relaying-diffusion-policy",
        "tags": "DP",
        "summary": "",
        "markdown": "**文章标题；**Responsive Noise-Relaying Diffusion Policy: Responsive and Efficient Visuomotor Control\n**链接；**https://arxiv.org/pdf/2502.12724\n![image](assets/blog_images/68.png)",
        "updatedAt": "2026-05-17T16:56:43.938Z"
    },
    {
        "title": "Equivariant Diffusion Policy",
        "date": "2026-05-17",
        "slug": "equivariant-diffusion-policy",
        "tags": "DP",
        "summary": "",
        "markdown": "**文章标题；**Equivariant Diffusion Policy\n**链接；**https://arxiv.org/pdf/2407.01812\n![image](assets/blog_images/69.png)",
        "updatedAt": "2026-05-17T18:32:52.752Z"
    },
    {
        "title": "robot learning tutorial",
        "date": "2026-05-15",
        "slug": "robot-learning-tutorial",
        "tags": "learning notes",
        "summary": "",
        "markdown": "\nepoch vs step/iteration vs batch\nbatch size=100时意味着每个batch有100个\n![image](assets/blog_images/55.png)\n\n\nasynochronous interface\n![image](assets/blog_images/53.png)\n\n**文章链接；**https://arxiv.org/pdf/2510.12403\n\n**aggregate(old_action, new_action):** weighted_average、latest_only、average、conservative\n\n\n**warm up:**在正式让模型参与控制之前，先让模型跑几次“空推理/预推理”，让 GPU、PyTorch、CUDA kernel、缓存、模型内部状态等进入稳定工作状态。\n\n**warm up epoch:**训练刚开始的前几个 epoch，不直接使用目标学习率，而是让 learning rate 从一个很小的值逐渐升到设定值。\n```bash\nepoch 1: lr = 2e-5\nepoch 2: lr = 4e-5\nepoch 3: lr = 6e-5\nepoch 4: lr = 8e-5\nepoch 5: lr = 1e-4\nepoch 6 以后: 正常 lr schedule\n```\n\nDropout 就是训练时随机屏蔽一部分神经元，让模型不要过度依赖局部特征，从而提高泛化能力。\n![image](assets/blog_images/63.png)\ndropout rate（%） 代表需要随机丢掉多少神经元\n\n**cosine delay；**Cosine decay 一般指学习率按照余弦曲线逐渐衰减；一开始 learning rate 比较大；然后逐渐变小；最后接近 0 或某个最小值。常和 warmup 一起使用，用来让训练更平滑、更稳定。\n![image](assets/blog_images/67.png)\n\n```python\ndataloader:\n  batch_size: 64\n  num_workers: 8 #用几个 CPU 子进程提前帮你读取、解码、预处理数据\n  shuffle: True #表示每个 epoch 开始前，把数据顺序打乱\n  pin_memory: True #和 CPU 内存到 GPU 显存的数据传输有关\n  persistent_workers: False #表示每个 epoch 结束后，DataLoader 的 worker 进程会被关闭；下一个 epoch 再重新创建\n```\nencoder/backbone/estimator vs decoder/head\n![image](assets/blog_images/74.png)",
        "updatedAt": "2026-05-22T09:47:52.153Z"
    },
    {
        "title": "upsampling vs decoder",
        "date": "2026-05-14",
        "slug": "upsampling-vs-decoder",
        "tags": "learning notes",
        "summary": "",
        "markdown": "![image](assets/blog_images/52.png)\n\nUpsampling 是一种“放大特征图尺寸”的操作; decoder 是一个“从隐变量/低级表示生成目标输出”的网络模块。\n![image](assets/blog_images/51.png)\n![image](assets/blog_images/50.png)\n",
        "updatedAt": "2026-05-14T09:55:46.939Z"
    },
    {
        "title": "How to Peel with a Knife: Aligning Fine-Grained Manipulation with Human Preference",
        "date": "2026-05-12",
        "slug": "how-to-peel-with-a-knife-aligning-fine-grained-manipulation-with-human-preference",
        "tags": "DP",
        "summary": "",
        "markdown": "**文章标题；**How to Peel with a Knife: Aligning Fine-Grained Manipulation with Human Preference\n**链接；**https://toruowo.github.io/peel/assets/peel.pdf\n\n**方法；**\n![image](assets/blog_images/37.png)\n\nReward Model：**three-layer MLP**\n![image](assets/blog_images/46.png)\n这里的 rt 来自两部分：\n第一部分是 quantitative reward，也就是**削皮厚度**。论文把轨迹按 2Hz 分段，每段标注一个厚度类别，比如 nominal、slightly above nominal、excessive 等，然后映射成 0 到 1 的 reward。\n第二部分是 qualitative reward，也就是人类对整个削皮结果的**主观**评分，0 到 9 分，例如 too low、too high、short thick、long thin 等，再映射成 0 到 1 的 reward。\n\nResidual Policy：**two-layer MLP**\n![image](assets/blog_images/47.png)\n![image](assets/blog_images/48.png)\n![image](assets/blog_images/49.png)\n**L2 正则项的添加目的是不希望 residual policy 改得太猛**\n\n\n**EXPERIMENTS；**\nTask definition\nEvaluation metrics\n![image](assets/blog_images/43.png)\n![image](assets/blog_images/41.png)\n![image](assets/blog_images/42.png)\nTraining details\n![image](assets/blog_images/38.png)\nA. Overall Performance\n![image](assets/blog_images/39.png)\nB. How to Collect High-Quality Data for Peeling?\n![image](assets/blog_images/40.png)\nC. How to Learn High-Performance Peeling Policies?\nD. How to Align Learned Policies with Human Preference?\nE. Failure Cases",
        "updatedAt": "2026-05-12T16:07:20.258Z"
    },
    {
        "title": "DiT-Block Policy",
        "date": "2026-05-11",
        "slug": "dit-block-policy",
        "tags": "DP",
        "summary": "",
        "markdown": "**文章标题；**The Ingredients for Robotic Diffusion Transformer\n**链接；**https://arxiv.org/pdf/2410.10088\n**网络架构；**\n![image](assets/blog_images/29.png)\n\n**注意；**\n区分 self-attention / cross-attention 的依据不是“是不是多模态”，而是：Q、K、V 是不是来自同一组 token / 同一个序列，如[image tokens, language tokens, qpos token]。\n\n\n训练：diffusion transformer\n采样：deterministic sampling | DDIM\n\n**池化：**\n![image](assets/blog_images/30.png)\n\n**什么是CLS Pooling：**\n![image](assets/blog_images/31.png)\n![image](assets/blog_images/32.png)",
        "updatedAt": "2026-05-11T05:08:00.099Z"
    },
    {
        "title": "5 conditioning methods",
        "date": "2026-05-11",
        "slug": "5-conditioning-methods",
        "tags": "learning notes",
        "summary": "",
        "markdown": "**常见conditioning方式：**\n1. concat：把 obs embedding 和 action token 拼一起\n2. add：把 condition embedding 加到 token 上\n3. FiLM / adaLN：用 condition 生成 scale / shift 调制网络\n4. cross-attention：action token 读取 obs tokens\n5. prefix tokens：把 condition 当作前缀 token 放进序列\n![image](assets/blog_images/33.png)\n![image](assets/blog_images/34.png)\n![image](assets/blog_images/35.png)\n\n**concat vs prefix tokens：**\nconcat：每个 action token 背后都直接贴上条件向量，如[a0;c], [a1;c], [a2;c]\nprefix tokens：条件是单独的 token，action token 通过 attention 去看它，如[c, a0, a1, a2]\n\n**cross attention 和 conditioning有什么不同吗？**\nCross-attention 是 conditioning 的一种具体实现方式。conditioning 更宽泛，只要条件信息影响模型输出，都叫 conditioning。\n\n",
        "updatedAt": "2026-05-11T05:08:39.443Z"
    },
    {
        "title": "Diffusion Policy",
        "date": "2026-05-10",
        "slug": "diffusion-policy",
        "tags": "DP",
        "summary": "",
        "markdown": "**标题：**Diffusion Policy: Visuomotor Policy Learning via Action Diffusion\n\n**链接：**https://arxiv.org/pdf/2303.04137\n\nwhat it the difference among diffusion policy and others?\n![image](assets/blog_images/79.png) \n![image](assets/blog_images/78.png) \n\n**网络架构：**\n![image](assets/blog_images/36.png)\n当 diffusion 生成的是图像时，denoiser 要处理高维空间结构，所以常用 U-Net 或 DiT；当 diffusion 生成的是低维动作序列时，denoiser 只需要处理动作时间序列，所以可以用 1D CNN 或 Transformer。图像观测只是条件输入，通常先由视觉编码器提成特征。\n\n为什么这里action horizon可以影响trade-off between responsiveness and temporal consistancy?\n需要清楚，action horizon越小，比如说1，此时就不是action chunkings output了，当然会影响动作连贯性；action horizon越大，相比于小的horizon推理的时间会更长，responsiveness就低一些。\n![image](assets/blog_images/1.png)\n**Temporal Action Consistancy**：动作序列在时间维度上的连贯性。\n\n\n**DDPM/DDIM**\n[reference](https://github.com/kingkingofall/DDPM_DDIM/blob/main/study.ipynb)\nmlp/cnn/u-net/transformer等网络模型根据随机噪声和条件预测去噪噪声，过scheduler（ddpm/ddim）得到去噪的动作，迭代多次（K）得到下一个action chunk\n![image](assets/blog_images/54.png)\n\n**DDPM 全称：**\nDenoising Diffusion Probabilistic Models|去噪扩散概率模型\n**DDIM 全称：**\nDenoising Diffusion Implicit Models | 去噪扩散隐式模型（通过 **η** 调节是否是确定性的）\n![image](assets/blog_images/207.png)\n真实机器人实验中训练用了 100 个 training diffusion iterations，但用 DDIM 把 inference iterations 降到 8 来减少延迟\n\n都属于采样/生成方法\n```bash\nDDPM：学会怎么一步步去噪\nDDIM：推理时少走几步、跳着去噪\nDiffusion Policy：把这个过程放到 action chunk 上\n```\n\n训练时在每一个batch里，dp会\n1. 取一批 minibatch demonstration 数据\n2. 取出 observation 和真实 action chunk\n3. 随机采样 diffusion timestep t：先从真实 action 出发，把一个和 action 同尺寸的随机噪声加到 action 上，得到 noisy action，再把 noisy action 和 t 输入网络\n4. 把 noisy action、observation、t 输入 denoising network\n5. 网络预测噪声\n6. 用预测噪声和真实噪声计算 loss\n7. 反向传播，更新 CNN / Transformer / U-Net 参数\n**t=100 表示“有 100 种噪声程度”**\n**DDPM：**\n![image](assets/blog_images/75.png)\n```python\na_t = sqrt(alpha_bar_t) * a_0 + sqrt(1 - alpha_bar_t) * epsilon # t越大，噪声越大\n```\n![image](assets/blog_images/76.png)\n训练从x0到xt，在t步加噪情况下总共加了多少噪声；推理从xt到x0，在t步去噪下总共需要减去多少噪声，迭代到x0.\n\n**为什么denoising step越多，模型更容易生成多模态结果？**\n想象每一次action chunking的输出都分布在一个distribution（自身具备一定的多模态性），denoising step越多，模型更能正确找到这个distribution（但输出仍旧是一个特定的解，有不同的解所以具备多模态性）。\n由于噪声估计有error，所以每次从不同step估计得到的x0可能都不在一个distribution里，但这里得承认经过不断地使用噪声估计器来减噪，结果是越来越清晰的（比一开始的随机噪声清晰）。\n本来加噪过程的学习其实也是由x0一步一步加过来的，此时如果在去噪的时候直接由一个纯噪声一步变为x0，是不准的。这个不准可能体现在原先数据分布可能是多模态的（比如说多峰分布），现在直接变成了单峰。如果只是one-step denoising，那么不同的初始噪声都可能首先是非正解，这个非正解可能是多模态性坍缩，也可能是是多峰分布但数值有问题。\n另外，注意，这里只是最后算出来x0解的空间刚好落在那个distribution上，不是说在这个distribution里面随机采样一个解来作为x0，也没法这么做。\n但one-step denoising的好处自然就在于它够快，当objective action space比较简单符合单峰的时候，可以考虑直接用。但最好还是蒸馏一下？",
        "updatedAt": "2026-11-06T08:42:58.763Z"
    },
    {
        "title": "π0",
        "date": "2026-05-10",
        "slug": "0",
        "tags": "VLA",
        "summary": "",
        "markdown": "**标题**: π0: A Vision-Language-Action Flow Model for General Robot Control\n**文章链接**：https://arxiv.org/pdf/2410.24164\n\n从LLM到VLM到1st VLA到 2rd VLA\n![image](assets/blog_images/248.png)\n1. 原始transformer-based LLM\n2. 加一个visual encoder\n3. 输出变为离散的动作token\n4. 用一个diffusion head+参考动作生成连续空间的动作：virtual motor cortex\n\n**总体架构**：\n![image](assets/blog_images/8.png)\n\n**注意**：In practice, the representation would be broken since the cross-attention integration between visual observations and predicted noisy tactile signals\n\n**VLM架构**（以PaliGemma为例）：\n**decoder-only transformer architecture, using self-attection to connect different tokens**\n![image](assets/blog_images/9.png)",
        "updatedAt": "2026-11-11T09:43:01.112Z"
    },
    {
        "title": "ImplicitRDP",
        "date": "2026-05-10",
        "slug": "implicitrdp",
        "tags": "DP",
        "summary": "",
        "markdown": "**标题**：ImplicitRDP: An End-to-End Visual-Force Diffusion Policy with Structural Slow-Fast Learning\n**文章链接**：https://arxiv.org/pdf/2512.10946\n**总体结构**：\n![image](assets/blog_images/2.png)\n\n**slow fast system architecture**：\n这个工作中对于快慢系统的定义与rdp（two-stage training）类似，训练方式变为了end2end，依旧是一次视觉多次触觉出动作。\n![image](assets/blog_images/89.png)\n![image](assets/blog_images/3.png)\n\n\n**casual cross attention in transformer-decoder**：\n行是query，列是key/values，这里代表说action看不到未来的force\n\n![image](assets/blog_images/4.png)\ndp原作也有该结构，代表说action emb看不到未来的action emb，这里准确来说应该是casual self-attention，目的是使得未来动作会参考过去动作，从而沿着同一个 mode 继续走，可提高temporal action coherence/consistancy\n\n**为什么做casual self-attention**（未来看得到过去，过去看不到未来，保持一个方向的因果逻辑）：\n1. 保持时间因果方向\n2. 让后续动作延续前序动作的 mode\n3. 避免当前要执行的动作过度依赖未执行的未来计划\n4. 更接近 autoregressive-style 的轨迹展开\n\n\n\n\n\n\n",
        "updatedAt": "2026-09-05T04:10:31.277Z"
    },
    {
        "title": "FACTR",
        "date": "2026-05-10",
        "slug": "factr",
        "tags": "ACT",
        "summary": "",
        "markdown": "**标题**：FACTR: Force-Attending Curriculum Training for Contact-Rich Policy Learning\n**文章链接**：https://arxiv.org/pdf/2502.17432\n**总体框架**：\n![image](assets/blog_images/7.png)\n\n**创新点**：\n1. 遥操作系统\n2. utilizing curriculum learning to better use force feedback in policy learning\n\n**注意**：重点看 curriculum learning的模块",
        "updatedAt": "2026-05-10T05:35:10.162Z"
    },
    {
        "title": "ALOHAUnleashed",
        "date": "2026-05-10",
        "slug": "alohaunleashed",
        "tags": "ACT",
        "summary": "",
        "markdown": "**标题**：ALOHAUnleashed: A Simple Recipe for Robot Dexterit\n**文章链接**：https://arxiv.org/pdf/2410.13126\n**总体架构**：\n![image](assets/blog_images/10.png)\n",
        "updatedAt": "2026-05-10T05:35:27.178Z"
    },
    {
        "title": "ViTacFormer",
        "date": "2026-05-10",
        "slug": "vitacformer",
        "tags": "ACT",
        "summary": "",
        "markdown": "**标题**： ViTacFormer: Learning Cross-Modal Representation for Visuo-Tactile Dexterous Manipulation\n**文章链接**：https://arxiv.org/pdf/2506.15953\n**总体架构**：\n![image](assets/blog_images/5.png)\n**创新点**：\n1. 视触觉通过cross attention融合表征\n2. 触觉auto regressive输出（与原始tokens【z/joints/images/touch】）后预测action chunkings\n\n**tactile predictor**：\n![image](assets/blog_images/6.png)\n\n**实验**：\n1. benchmark and environment setup\n2. metrics and baselines\n3. algorithm comparison\n3.1 comparison with sota baseline\n3.2 perform on complex long-horizon tasks\n4. ablation study\n4.1 contribution from each different conponent\n4.2 failture study",
        "updatedAt": "2026-05-10T05:35:54.388Z"
    },
    {
        "title": "ATTENTION RESIDUALS",
        "date": "2026-05-10",
        "slug": "attention-residuals",
        "tags": "ATTENTION",
        "summary": "",
        "markdown": "**标题**：ATTENTION RESIDUALS\n**文章链接**：https://arxiv.org/pdf/2603.15031\n**总体架构**：\n![image](assets/blog_images/11.png)\n\n**原理关键**：\n1. MoE: mixture of experts\n2. simple residuals:\n![image](assets/blog_images/12.png)\n其中，\n![image](assets/blog_images/13.png)\nattention residuals改成：\n![image](assets/blog_images/14.png)\n\n3. Full AttnRes每一层都要存所有之前层的输出：\n```python\nLayer 1 output\nLayer 2 output\nLayer 3 output\n...\nLayer L output\n```\nBlock AttnRes分块了：\n```python\n# 跨 block：用 Attention Residuals\n# block 内部：仍然用普通 residual\nBlock n-1\nBlock n-2\n...\n```\nai的理解：\n![image](assets/blog_images/15.png)\n\n4. attention？\n\n![image](assets/blog_images/16.png)\n\n即：\n```python\n历史层输出 v0, v1, v2, ...\n        ↓\n和当前层的 w_l 做匹配\n        ↓\nsoftmax 得到 α0, α1, α2, ...\n        ↓\n加权求和得到当前层输入 h_l\n```\n\n**为什么说是LSTM竖过来？**：\nLSTM沿时间方向维护一个 memory，并用 gate 控制信息流\n```python\n上一时刻:\nh_{t-1}, c_{t-1}\n\n当前输入:\nx_t\n\n        h_{t-1}, x_t\n              ↓\n ┌────────────┼────────────┐\n ↓            ↓            ↓\nforget gate  input gate   candidate\n f_t          i_t          c̃_t\n ↓            ↓            ↓\n f_t*c_{t-1}  i_t*c̃_t\n        \\      /\n         \\    /\n          ↓  ↓\n        c_t = f_t*c_{t-1} + i_t*c̃_t\n          ↓\n      output gate o_t\n          ↓\n        h_t = o_t*tanh(c_t)\n```\nAttenResi是沿着layer/block方向（空间）+用attention筛选\n\n沿着时间方向：数据随时间进入网络\n沿着深度方向：同一个数据，随着深度，多次被处理",
        "updatedAt": "2026-05-10T05:36:12.004Z"
    },
    {
        "title": "FlowPolicy",
        "date": "2026-05-10",
        "slug": "flowpolicy",
        "tags": "FM",
        "summary": "",
        "markdown": "**标题**：FlowPolicy:Enabling Fast and Robust 3D Flow-based Policy via Consistency Flow Matching for Robot Manipulation\n**文章链接**：https://arxiv.org/pdf/2412.04987\n**概述**：使用flow matching以及【straight-line flow 和 velocity consistency】实现one-step inference（因此比dp快，因为dp一次观测多步去噪得到结果），性能优于dp3、simple dp3\n\n**总体架构**：\n![image](assets/blog_images/17.png)\n\n**temporal action consistancy**: 动作序列在时间维度上的连贯性",
        "updatedAt": "2026-05-10T05:38:19.650Z"
    },
    {
        "title": "Learning Robotic Manipulation Policies from Point Clouds with Conditional Flow Matching",
        "date": "2026-05-10",
        "slug": "learning-robotic-manipulation-policies-from-point-clouds-with-conditional-flow-matching",
        "tags": "FM",
        "summary": "",
        "markdown": "**标题**：Learning Robotic Manipulation Policies from Point Clouds with Conditional Flow Matching\n**文章链接**：https://arxiv.org/pdf/2409.07343\n**总体架构**：\n\n![image](assets/blog_images/18.png)",
        "updatedAt": "2026-05-10T05:38:54.757Z"
    },
    {
        "title": "ChainedDiffuser",
        "date": "2026-05-10",
        "slug": "chaineddiffuser",
        "tags": "FM",
        "summary": "",
        "markdown": "**标题**：ChainedDiffuser: Unifying Trajectory Diffusion and Keypose Prediction for Robotic Manipulation\n**文章链接**：https://openreview.net/forum?id=W0zgY2mBTA8\n**总体架构**：\n\n![image](assets/blog_images/19.png)",
        "updatedAt": "2026-05-10T05:39:21.202Z"
    },
    {
        "title": "AdaFlow",
        "date": "2026-05-10",
        "slug": "adaflow",
        "tags": "FM",
        "summary": "",
        "markdown": "**标题**：AdaFlow: Imitation Learning with Variance-Adaptive Flow-Based Policies\n**文章链接**：https://arxiv.org/abs/2402.04292\n**总体架构**：\n![image](assets/blog_images/20.png)",
        "updatedAt": "2026-05-10T05:39:43.090Z"
    },
    {
        "title": "Homer",
        "date": "2026-05-10",
        "slug": "homer",
        "tags": "DP",
        "summary": "",
        "markdown": "**文章标题：**HOMER:Learning In-the-Wild Mobile Manipulation\nvia Hybrid Imitation and Whole-Body Control\n**链接：**https://arxiv.org/pdf/2506.01185\n**总体架构：**\n![image](assets/blog_images/21.png)\n\n**Experiments:**\n1. core questions:\n1) Do **hybrid actions** help with multi-step tasks combining reaching and fine manipulation?\n2) Does the **WBC action space** improve performance compared to **decoupled base-arm actions**?\n3) Can HOMER **generalize** to novel object instances and spatial configurations?\n2. Baselines：DP(B+A)/DP(WBC)/Homer(B+A)/Homer(WBC)\n3. Task Performance Goal: wide workspaces, precise phases, and long horizons\n4. Benchmark:\n![image](assets/blog_images/22.png)\n![image](assets/blog_images/23.png)\n\n**success rate defination:**",
        "updatedAt": "2026-05-10T08:54:20.393Z"
    },
    {
        "title": "RDP",
        "date": "2026-05-10",
        "slug": "rdp",
        "tags": "DP",
        "summary": "",
        "markdown": "**文章标题：**Reactive Diffusion Policy:\nSlow-Fast Visual-Tactile Policy Learning for Contact-Rich Manipulation\n**链接：**https://arxiv.org/pdf/2503.02881\n**总体架构：**\n![image](assets/blog_images/24.png)\n\n**Experiments:**\n1. core problems: \n1) tactile image vs tactile embedding, \n2) rdp(slow-fast closed-loop) vs dp\n2. baselines: DP/DP(T-image)/DP(T-embedding)/RDP(T-embedding)/RDP(F)\n3. benchmark = 任务设计 + 数据/环境 + 评价指标 + 实验协议:\n1）任务设计\n![image](assets/blog_images/26.png)\n2）数据/环境：真机数据\n3）metrics:\n![image](assets/blog_images/25.png)\n\n4）实验协议：\n第一，所有方法使用类似初始状态，通过**预定义图像手动对齐机器人和物体**。\n\n第二，Peeling 和 Wiping 设置三种测试变化：**无扰动**、**接触前扰动**、**接触后扰动**；Bimanual Lifting 设置软纸杯和硬纸杯两种变化。\n\n(a)No perturbation.The object is **fixed** with a random 6D pose in the air.\n(b)Perturbation before contact. The human evaluator will **move the object right before** the tool makes contact. \n(c)Perturbation after contact. The human evaluator will **move the object after the tool makes contact** to break the contact state.\n\n\n第三，每个 **test-time variation 运行 10 次**。\n第四，因为测试中有人类参与，论文采用了 **single-blind testing：每次随机选择一个模型评估，评估者不知道当前测试的是哪个模型，以减少主观判断影响**。\n第五，**控制频率也被规范化**：DP 和 RDP 的 slow policy 预测 12 FPS 的 action sequence；RDP fast policy 使用 24 FPS 的 tactile/force observation 并输出 24 FPS action（no sequence）；最终**动作插值**后以 500 Hz 发送给机器人。\n\n![image](assets/blog_images/28.png)\n\n**RESULTS；**\n![image](assets/blog_images/44.png)\n![image](assets/blog_images/45.png)\n\n\n思考：\n这篇文章的思路是为了设计了一个新的闭环思路，通过在dp推理之后细化且自回归基于力表征的动作。但文章重在强调力（尽管是触觉，也是简单地生成力来判断），没有体现触觉表征的全部特性。\n\n\n## Writing Architecture\ndesign experiment questions：Q1、Q2、Q3、Q4、Q5、Q6、Q7\nA. Setup\n1) Hardware\n2) Baselines\n3) Tasks\n4) Evaluation Protocols\n5) Implementation Details\nB. Results\nQ1、Q2、Q3、Q4、Q5、Q6、Q7",
        "updatedAt": "2026-05-12T16:07:54.464Z"
    }
];
